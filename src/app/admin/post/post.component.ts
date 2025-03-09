import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  posts = [
    {
      title: 'Sample Post',
      content: 'This is a sample post.',
      image: '',
      visible: false,
    },
  ];

  newPost = { title: '', content: '', image: '' };

  // Inject the Router service into the constructor
  constructor(private router: Router) {}

  addPost() {
    if (this.newPost.title.trim() && this.newPost.content.trim()) {
      this.posts.push({ ...this.newPost, visible: false });
      this.newPost = { title: '', content: '', image: '' };
    } else {
      alert('Both title and content are required!');
    }
  }

  togglePost(post: any) {
    post.visible = !post.visible;
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newPost.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  // Use the injected Router service to navigate
  navigateBack() {
    this.router.navigate(['/']); // Navigate to the home route
  }
}

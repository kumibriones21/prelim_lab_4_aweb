import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  // Static profile image path
  ProfileUrl = '../images/profile.jpg';
  w = 400;
  h = 400;
  altText = 'Profile';

  introduction = 'Hello! I\'m Kumi, and I love sharing my experiences with coding, gaming, and reading.';
  description = 'I am passionate about exploring new experience, coding, and learning new things every day.';

  // User List
  userList = [
    { name: 'Qmi', email: 'qmi@example.com' },
    { name: 'John Doe', email: 'johndoe@example.com' }
  ];

  // Add a New User to the List
  newUser = { name: '', email: '' };
  addUser(): void {
    if (this.newUser.name && this.newUser.email) {
      this.userList.push({ name: this.newUser.name, email: this.newUser.email });
      this.newUser.name = '';
      this.newUser.email = '';
    } else {
      alert('Please provide both name and email');
    }
  }

  constructor(private router: Router) {}

  // Navigate Back to Home
  navigateBack(): void {
    this.router.navigate(['/']);
  }
}

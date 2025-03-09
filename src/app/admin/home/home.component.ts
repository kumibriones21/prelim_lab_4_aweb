import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ProfileUrl = 'https://static.scientificamerican.com/sciam/cache/file/AE983AED-546D-42CD-AE6E0DDD7D0A081A_source.jpg';
  w = 500;
  h = 400;
  altText = "Profile";
  introduction = 'Hello! I\'m Alyanna Cyrelle Kumi Briones, and this is my personal social space where I share my thoughts, posts, and more!';
  interests = ['Gaming', 'Watching Kdrama & Anime', 'Reading', 'Music', 'Technology'];
  // purpose = 'Here, I share my passion for gaming, the latest in Kdramas and anime, insightful book recommendations, music favorites, and tech trends. Join me in exploring these exciting topics and more!';
  projects = [
    { name: 'Sweet Side', description: 'A space where I write sweets and pastries.', link: 'https://sweetside18.wordpress.com/' }
  ];
  features = ['User', 'Post'];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
  }
}


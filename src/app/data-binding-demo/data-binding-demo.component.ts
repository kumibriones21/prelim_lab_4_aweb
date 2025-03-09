import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './data-binding-demo.component.html',
  styleUrl: './data-binding-demo.component.css'
})
export class DataBindingDemoComponent {
  message="My First App!"
  description="This is my new Angular Application - Data Binding Demo"
  imageUrl = '../images/angular.jpg';
  w = 100;
  h = 100;
  altText = "Angular Logo";
  textColor='skyblue';
  ishighlighted = true;
  yourName='';

  count =0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}

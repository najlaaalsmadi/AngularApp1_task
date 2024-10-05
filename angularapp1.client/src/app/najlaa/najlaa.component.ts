import { Component } from '@angular/core';

@Component({
  selector: 'app-najlaa',
  templateUrl: './najlaa.component.html',
  styleUrl: './najlaa.component.css'
})
export class NajlaaComponent {

users = [
  { name: 'User1', email: 'user1@example.com', age: 25 },
  { name: 'User2', email: 'user2@example.com', age: 30 },
  { name: 'User3', email: 'user3@example.com', age: 28 }
];
}

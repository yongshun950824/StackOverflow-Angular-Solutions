import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { User } from './user.model';
import { databasePipe } from './database.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [databasePipe],
})
export class App {
  filters = ['B', 'C'];
  users: User[] = [
    {
      name: 'Albert',
      surname: 'Lee',
      age: '33',
      id: 1,
    },
    {
      name: 'Jinny',
      surname: 'Soo',
      age: '18',
      id: 2,
    },
    {
      name: 'Alex',
      surname: 'Chin',
      age: '43',
      id: 3,
    },
  ];
}

bootstrapApplication(App);

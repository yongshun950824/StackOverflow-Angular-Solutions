import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TaskStatusListComponent } from './app/task-status-list/task-status-list.component';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskStatusListComponent],
  template: `
    <app-task-status-list></app-task-status-list>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);

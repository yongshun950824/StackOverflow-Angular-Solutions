import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import 'zone.js';
import { TaskService } from './app/taskService/task.service';
import { Task } from './../src/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
  <input type="text" name="task-filter" (keyup)="onKeyUp($event)" [(ngModel)]="searchValue">
  @for (task of tasks ;track task.id) {
        <div class="task">
          <div>{{task.title}}</div>
          <div>{{task.description}}</div>
        </div>
      }
  `,
})
export class App implements OnInit {
  name = 'Angular';
  tasks!: Task[];
  tasksSubscription!: Subscription;
  searchValue: string = '';

  constructor(public taskService: TaskService) {}

  ngOnInit() {
    this.tasksSubscription = this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  public onKeyUp(event: KeyboardEvent): void {
    this.taskService.filterTasks(this.searchValue);
  }

  ngOnDestroy(): void {
    this.tasksSubscription.unsubscribe();
  }
}

bootstrapApplication(App);

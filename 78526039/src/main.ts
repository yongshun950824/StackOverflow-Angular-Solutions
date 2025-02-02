import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TaskFormComponent } from './app/task-form/task-form.component';
import { filter } from 'rxjs';
import 'zone.js';
import { MatDialog } from '@angular/material/dialog';
import { Task } from './app/task';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TASK_STATUSES } from './app/status';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskFormComponent],
  template: `
  <button (click)="addTask()">Add Task</button>
  <button (click)="editTask()">Edit Task</button>
  `,
})
export class App {
  name = 'Angular';

  constructor(private dialog: MatDialog) {}

  public addTask() {
    this.dialog
      .open(TaskFormComponent, {})
      .afterClosed()
      .pipe(filter((task) => task))
      .subscribe((task) => {
        console.log('Add Task:');
        console.log(task);
      });
  }

  public editTask() {
    let task: Task = {
      id: 1,
      title: 'Task 1',
      subtasks: [
        {
          id: 1,
          taskId: 1,
          description: 'Subtask 1',
          isDone: true,
        },
        {
          id: 2,
          taskId: 1,
          description: 'Subtask 2',
          isDone: false,
        },
      ],
      contacts: [
        {
          id: 1,
          email: 'john@doe.de',
          name: 'John Doe',
        },
        {
          id: 2,
          email: 'jane@doe.de',
          name: 'Jane Doe',
        },
      ],
      status: TASK_STATUSES['IN_PROGRESS'],
    };

    this.dialog
      .open(TaskFormComponent, {
        data: { fromPopup: true, task: task },
      })
      .afterClosed()
      .pipe(filter((task) => task))
      .subscribe((task) => {
        console.log('Edit Task:');
        console.log(task);
      });
  }
}

bootstrapApplication(App, {
  providers: [provideAnimations()],
}).catch((err) => console.error(err));

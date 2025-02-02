import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TaskFormComponent } from './app/task-form/task-form.component';
import { filter } from 'rxjs';
import 'zone.js';
import { MatDialog } from '@angular/material/dialog';
import { Task } from './app/task';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskFormComponent],
  template: `
    <button (click)="editTask()">Edit Task</button>
  `,
})
export class App {
  name = 'Angular';

  constructor(private dialog: MatDialog) {}

  public editTask() {
    let task: Task = {
      id: 1,
      title: 'Task 1',
      subtasks: [
        {
          id: 1,
          taskId: 1,
          description: 'Subtask 1',
        },
        {
          id: 2,
          taskId: 1,
          description: 'Subtask 2',
        },
      ],
    };

    this.dialog
      .open(TaskFormComponent, {
        data: { fromPopup: true, task: task },
      })
      .afterClosed()
      .pipe(filter((task) => task))
      .subscribe((task) => {
        console.log('Edit Task:', task);
      });
  }
}

bootstrapApplication(App, {
  providers: [provideAnimations()],
}).catch((err) => console.error(err));

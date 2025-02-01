import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TaskFormComponent } from './app/task-form/task-form.component';
import 'zone.js';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Task } from './app/task';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import * as _ from 'lodash';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskFormComponent, CommonModule],
  template: `
  <!-- <app-task-form></app-task-form> --> 
  <br><br><br>
  <button (click)="updateTask()">Edit</button>

  <div>Updated Subtasks:</div>
  <ul>
    <li *ngFor="let subtask of this.task.subtasks">
      {{ subtask.description }}
    </li>
  </ul>

  `,
})
export class App {
  name = 'Angular';
  task: Task = {
    id: 1,
    title: 'Task 1',
    subtasks: [
      {
        id: 1,
        taskId: 1,
        description: 'Subtask 1',
        isDone: false,
        isEditable: false,
      },
      {
        id: 2,
        taskId: 1,
        description: 'Subtask 2',
        isDone: false,
        isEditable: false,
      },
    ],
  };
  constructor(private dialog: MatDialog) {}
  public updateTask() {
    this.dialog
      .open(TaskFormComponent, {
        data: { fromPopup: true, task: _.cloneDeep(this.task) },
      })
      .afterClosed()
      .pipe(filter((task) => task))
      .subscribe((task) => (this.task = task));
  }
}

bootstrapApplication(App, {
  providers: [provideAnimations()],
}).catch((err) => console.error(err));

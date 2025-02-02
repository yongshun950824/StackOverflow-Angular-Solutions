import { Component } from '@angular/core';
import { TaskStatusComponent } from './task-status/task-status.component';
import { TASK_STATUSES } from '../../task-constants';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-status-list',
  standalone: true,
  imports: [TaskStatusComponent, CdkDropListGroup],
  templateUrl: './task-status-list.component.html',
  styleUrl: './task-status-list.component.scss',
})
export class TaskStatusListComponent {
  protected readonly TASK_STATUSES = TASK_STATUSES;
  protected readonly Object = Object;
}

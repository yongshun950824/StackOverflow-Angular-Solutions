import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDropList,
  CdkDrag,
} from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskComponent } from './task/task.component';
import { TASK_STATUSES } from '../../../task-constants';
import { TaskStatus } from '../../../status';
import { Task } from '../../../task';

@Component({
  selector: 'app-task-status',
  standalone: true,
  imports: [TaskComponent, CdkDropList, CdkDrag],
  templateUrl: './task-status.component.html',
  styleUrl: './task-status.component.scss',
})
export class TaskStatusComponent {
  protected readonly TASK_STATUSES = TASK_STATUSES;
  @Input() taskStatus!: TaskStatus;
  tasksSubscription!: Subscription;
  tasks: Task[] = [
    { id: 1, title: 'Task 1', status: TASK_STATUSES['TO_DO'] },
    { id: 2, title: 'Task 2', status: TASK_STATUSES['TO_DO'] },
    { id: 3, title: 'Task 3', status: TASK_STATUSES['DONE'] },
  ];
  tasksByStatus!: { [key: string]: Task[] };
  ngOnInit() {
    this.tasksByStatus = Object.keys(TASK_STATUSES).reduce((acc, cur) => {
      acc[cur] = this.tasks.filter((x) => x.status.key === cur);

      return acc;
    }, {} as { [key: string]: Task[] });

    console.log(this.tasksByStatus);
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  public assignTasksByStatus(status: string): Task[] {
    return this.tasksByStatus[status];
  }
}

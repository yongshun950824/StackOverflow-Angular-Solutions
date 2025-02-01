import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../../../src/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _tasks$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  tasks: Task[] = [];
  constructor() {
    this.fetchTasks();
  }

  public fetchTasks() {
    this.tasks = [
      {
        id: 1,
        title: 'Create Project Plan',
        description:
          'Develop a detailed project plan for the new software project.',
        category: 'Management',
        status: 'In Progress',
      },
      {
        id: 2,
        title: 'Conduct Code Review',
        description:
          'Perform a code review for the recently implemented feature.',
        category: 'Development',
        status: 'Pending',
      },
    ];
    this._tasks$.next(this.tasks);
  }

  public get tasks$(): Observable<Task[]> {
    return this._tasks$.asObservable() as Observable<Task[]>;
  }

  //public get tasks(): Task[] {
  //  return this._tasks$.getValue() as Task[];
  //}

  public filterTasks(searchText: string): void {
    if (!searchText) {
      this._tasks$.next(this.tasks);
    }

    searchText = searchText.toLowerCase();

    const filteredTasks = this.tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(searchText) ||
        task.description.toLowerCase().includes(searchText)
    );

    this._tasks$.next(filteredTasks);
  }
}

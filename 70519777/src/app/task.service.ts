import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from './task.model';

@Injectable()
export class TaskService {
  apiUrl = 'assets/data.json';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http
      .get<TaskResponse>(this.apiUrl)
      .pipe(map((response: TaskResponse) => response.tasks));
  }
}

export interface TaskResponse {
  tasks: Task[];
}

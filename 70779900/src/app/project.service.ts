import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from './project';

@Injectable()
export class ProjectService {
  constructor(private http: HttpClient) {}

  get(id: string): Observable<Project> {
    return this.http.get<Project>('/assets/data.json');
  }
}

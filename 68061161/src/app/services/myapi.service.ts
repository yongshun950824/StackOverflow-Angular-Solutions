import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MyapiService {
  constructor(private http: HttpClient) {}

  getBlog(): Observable<Blog[]> {
    return this.http.get<Blog[]>('/assets/data.json');
  }
}

export interface Blog {
  id: number;
  title: string;
  body: string;
}

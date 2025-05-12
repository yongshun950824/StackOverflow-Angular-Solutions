import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataloadService {
  constructor(private http: HttpClient) {}

  LoadData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }
}

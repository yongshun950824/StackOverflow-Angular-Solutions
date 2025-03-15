import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { info } from '../model/info.model';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  constructor(private http: HttpClient) {}

  public getInfo(): Observable<info[]> {
    //return this.http.get<info[]>('http://localhost:8080/api/info/get');
    return this.http.get<info[]>('/assets/data.json');
  }
}

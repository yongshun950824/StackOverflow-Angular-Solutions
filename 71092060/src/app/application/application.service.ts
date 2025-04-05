import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from './application';

@Injectable()
export class ApplicationService {
  constructor(private http: HttpClient) {}

  getPostponements(): Observable<HttpResponse<Application[]>> {
    //const url = `${this.apiUrl2}/postponements`;
    const url = '/assets/data.json';
    return this.http.get<Application[]>(url, { observe: 'response' });
  }
}

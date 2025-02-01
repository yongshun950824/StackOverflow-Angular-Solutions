import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employeeInterface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private _dataUrl: string = '/assets/data/employees.json';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._dataUrl);
  }
}

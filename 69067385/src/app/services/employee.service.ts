import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeResponse, IEmployee } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployeeById(id: number): Observable<EmployeeResponse> {
    return this.http.get('/assets/data.json').pipe(
      map((response: any) => {
        if (!response) return response;

        if (!response.results) return response;

        if (!response.results.employee) return response;

        let employee: IEmployee = {
          ...response.results.employee,
          licence_number:
            response.results.employee.licences &&
            response.results.employee.licences[0].licence_number
        };

        response.results.employee = employee;

        return response;
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class EmployeeService {
  getEmployeePersonalDetails(id: string): Observable<any> {
    return of();
  }
}

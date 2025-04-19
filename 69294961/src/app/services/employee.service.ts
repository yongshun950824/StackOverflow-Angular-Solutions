import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeResponse, IEmployee } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  getContactById(id: number): Observable<EmployeeResponse> {
    // return this.http.get<EmployeeResponse>(this.api.baseURL + 'company/employees/fetchbyid/' + id, this.httpOptions);

    return of({
      results: {
        employee: {
          id: 1,
          current_residential_address: 'Address 1',
          employeephones: [
            {
              phone_type_id: 1,
              phone_number: '123456789',
              is_primary_contact_number: true,
            },
            {
              phone_type_id: 2,
              phone_number: '123456790',
              is_primary_contact_number: false,
            },
          ],
        },
      },
    });
  }

  public updateContact(id: number, employee: IEmployee): Observable<any> {
    // return this.http.post(this.api.baseURL + 'employees/contact/update/' + id, employee, this.httpOptions);
    return of();
  }
}

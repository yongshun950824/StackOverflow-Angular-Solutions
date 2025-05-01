import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class registrationService {
  getBranchName(): Observable<any> {
    return of({
      data: {
        branchArr: [
          {
            branchCode: 'A11',
            branchName: 'b01',
            contactNo: '123456',
            managerEmail: 'abc@email.com'
          },
          {
            branchCode: 'A22',
            branchName: 'b02',
            contactNo: '123457',
            managerEmail: 'def@email.com'
          }
        ]
      }
    });
  }
}

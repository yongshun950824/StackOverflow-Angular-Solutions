import { Injectable } from '@angular/core';
import { catchError, delay, of, throwError, zip } from 'rxjs';

@Injectable()
export class RegistrationService {
  constructor() {}

  saveUserInfo(input: any) {
    return of({ status: 'success' }).pipe(delay(2000));

    // Throw fail observable
    //return of(delay(2000), throwError((err) => 'Error'));
  }

  infoRequest(input: any) {
    return of({ status: 'success' }).pipe(delay(3000));

    // Throw fail observable
    //return of(delay(3000), catchError((err) => 'Error'));
  }

  checkDuplicateUser(input: any) {
    return of({ executionDescription: 'Success' });
  }
}

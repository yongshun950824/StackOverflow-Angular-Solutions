import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';

interface EmailAvailableResponse {
  available: boolean;
  email: string;
}

@Injectable()
export class AuthService {
  // apiURLAuth = environment.apiUrl + 'users';

  constructor(private http: HttpClient) {}

  emailAvailable(email: string): Observable<any> {
    // return this.http.post<EmailAvailableResponse>(`${this.apiURLAuth}/emailexist`, {
    //   email
    // });

    //return of({ available: false });
    let error = new HttpErrorResponse({
      error: { email: 'This eamil is already registered' },
    });
    // error.error = { email: 'This eamil is already registered' };
    return throwError(() => error);
  }
}

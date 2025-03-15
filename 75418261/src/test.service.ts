import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError, delay } from 'rxjs';

@Injectable()
export class TestService {
  constructor(private http: HttpClient) {}

  API_URL = '';

  // Dummy observable
  err$ = throwError(() => ({
    type: 'https://tools.ietf.org/html/rfc7231#section-6.5.1',
    title: 'One or more validation errors occurred.',
    status: 400,
    traceId: '00-57b63f3ea418de93f36e991b5d8d2567-29a28274787dd62d-00',
    errors: {
      '': ['A non-empty request body is required.'],
      request: ['The request field is required.'],
    },
  }));

  submit(body: any): Observable<any> {
    // In real environment this is how you post request, get response and handle error response
    /*
    return this.http
      .post(API_URL, body)
      .pipe(catchError((err) => this.handleError(err)));
    */

    return this.err$.pipe(
      delay(2000),
      catchError((err) => this.handleError(err))
    );
  }

  handleError(err: any): Observable<any> {
    let handleErrResponse = {
      status: err.status,
      errorText: err.message || err.errorMessage || err.title,
      response: err,
    };

    if (err.status == 400) {
      let errors = Object.entries(err.errors).reduce(
        (acc, cur: [string, string[]]) => {
          for (let err of cur[1]) {
            acc.push({
              field: cur[0],
              error: err,
            });
          }

          return acc;
        },
        [] as { field: string; error: string }[]
      );

      handleErrResponse.response = errors;
    }

    return throwError(() => handleErrResponse);
  }
}

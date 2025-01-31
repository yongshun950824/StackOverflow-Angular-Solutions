import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdresseService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404 || error.status === 400) {
      return throwError(() => new Error(error.error));
    }
    // Dump technical message in console
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      console.error('An error occurred:', error.error.message);
    } else {
      // Backend error
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable (and more user-friendly) error message
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  searchCodePostalCommune(query: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('q', query);
    params = params.append('type', 'municipality');
    params = params.append('autocomplete', '1');
    const options = {
      params: params,
    };
    return this.http
      .get<any>('https://api-adresse.data.gouv.fr/search/', options)
      .pipe(catchError(this.handleError));
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, empty, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PortfolioService {
  baseUrl: string;

  constructor(private http: HttpClient) {}

  refreshPortfolioEpicsList(id: number): Observable<PortfolioEpicModel[]> {
    //this.baseUrl = this.conf.getSettings('apiUrl');

    // return this.http
    //   .get<PortfolioEpicModel[]>(this.baseUrl + '/api/pepics/' + id.toString())
    //   .pipe(catchError(this.errorHandler));

    return this.getPortfolioEpicslist().pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    console.info(error.message);

    return throwError(error.message || 'server error.');
  }

  refreshPortfolioEpicsListWithError(id: number): Observable<PortfolioEpicModel[]> {
    //this.baseUrl = this.conf.getSettings('apiUrl');

    // return this.http
    //   .get<PortfolioEpicModel[]>(this.baseUrl + '/api/pepics/' + id.toString())
    //   .pipe(catchError(this.errorHandler));

    return this.fakeError().pipe(catchError(this.errorHandler));
  }

  private getPortfolioEpicslist(): Observable<PortfolioEpicModel[]> {
    return of([
      {
        id: 1,
        name: 'Portfolio 1'
      },
      {
        id: 2,
        name: 'Portfolio 2'
      },
      {
        id: 3,
        name: 'Portfolio 3'
      }
    ]);
  }

  private fakeError() {
    return throwError({ message: 'Fake error' });
  }
}

export interface PortfolioEpicModel {
  id: number;
  name: string;
}

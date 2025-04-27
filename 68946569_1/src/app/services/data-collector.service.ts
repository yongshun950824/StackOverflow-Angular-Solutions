import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class DataCollectorService {
  private url = 'http://localhost:8080/mydata/';

  constructor(private http: HttpClient) {}

  squeezePosts(
    analysisType: string,
    limit: number
  ): Observable<Map<string, Post>> {
    // return this.http
    //   .get<Map<string, Post>>(`${this.url}${analysisType}/"none"/none"/${limit}`)
    //   .pipe(catchError(this.handleError<Map<string, Post>>('squeezePosts', undefined)));

    return this.http
      .get<Map<string, Post>>(`assets/data.json`)
      .pipe(
        catchError(
          this.handleError<Map<string, Post>>('squeezePosts', undefined)
        )
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(operation + ' failled: ' + error.message);
      return of(result as T);
    };
  }
}

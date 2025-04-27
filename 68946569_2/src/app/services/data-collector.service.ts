import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { KeyValuePair } from '../models/key-value-pair';
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
  ): Observable<KeyValuePair<Post>> {
    // return this.http
    //   .get<KeyValuePair<Post>>(`${this.url}${analysisType}/"none"/none"/${limit}`)
    //   .pipe(catchError(this.handleError<KeyValuePair<Post>>('squeezePosts', undefined)));

    return this.http
      .get<KeyValuePair<Post>>(`assets/data.json`)
      .pipe(
        catchError(
          this.handleError<KeyValuePair<Post>>('squeezePosts', undefined)
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

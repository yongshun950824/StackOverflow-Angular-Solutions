import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = 'localhost:4200/';
  constructor(private http: HttpClient) {}

  /* Your real API implementation */
  /*
  get(url: string, headers: HttpHeaders): Observable<any> {
    const requestOptions = {
      headers: headers
    };

    return this.http.get(this.apiUrl + url, requestOptions);  
  }
  */

  /* Mockup */
  get(url: string, headers?: HttpHeaders): Observable<any> {
    return this.http.get('/assets/data.json');
  }
}

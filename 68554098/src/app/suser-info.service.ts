import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SUserInfoService {
  constructor(private http: HttpClient) {}

  getAllUserDetail(): Observable<any> {
    return this.http.get('/assets/site-info.json');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SiteInfoService {
  constructor(private http: HttpClient) {}

  getAllSiteInfo1(): Observable<any> {
    return this.http.get('/assets/data.json');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetServiceService {
  constructor(private http: HttpClient) {}

  getCampaign(): Observable<any[]> {
    //return this.http.get('https://emaillead.aturtoko.id/api/v1/campaign')
    return this.http
      .get<any>('/assets/data.json')
      .pipe(map((response: any) => response.data));
  }
}

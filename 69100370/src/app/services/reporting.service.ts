import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { visionCompacteDTOs } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ReportingService {
  constructor(private httpClient: HttpClient) {}

  public getNews() {
    //return this.httpClient.get<visionCompacteDTOs[]>(this.url);

    return this.httpClient
      .get('/assets/db.json')
      .pipe(map((response: any) => response.visionCompacteDTO));
  }
}

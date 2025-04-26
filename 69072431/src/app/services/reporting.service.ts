import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { visionCompacteDTOs } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ReportingService {
  constructor(private http: HttpClient) {}

  getNews(): Observable<visionCompacteDTOs[]> {
    return this.http
      .get('/assets/db.json')
      .pipe(map((response: any) => response.visionCompacteDTO));
  }
}

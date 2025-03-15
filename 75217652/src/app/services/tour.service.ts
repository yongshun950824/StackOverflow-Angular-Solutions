import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
import { TourEvent } from '../models/tour-event';

@Injectable({
  providedIn: 'root',
})
export class TourEventsService {
  private eventsPath = 'api/tour-events';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<TourEvent[]> {
    //return this.http.get<TourEvent[]>(environment.apiUrl+this.eventsPath);
    return this.http.get<TourEvent[]>('/assets/data.json');
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ResponseApi } from '../models/api';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  list(): Observable<ResponseApi<Event>> {
    let response: ResponseApi<Event> = {
      results: EVENTS
    };

    return of(response);
  }

  detail(id: number): Observable<Event> {
    let event: Event = EVENTS.find(x => x.id == id);

    return of(event);
  }
}

export const EVENTS = [
  {
    id: 1,
    description: 'Event 1',
    start_time: null,
    end_time: null,
    cell: null,
    task_type: null
  },
  {
    id: 2,
    description: 'Event 2',
    start_time: null,
    end_time: null,
    cell: null,
    task_type: null
  },
  {
    id: 3,
    description: 'Event 3',
    start_time: null,
    end_time: null,
    cell: null,
    task_type: null
  }
];

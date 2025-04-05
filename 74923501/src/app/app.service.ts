import { Injectable } from '@angular/core';
import { delay, map, Observable, of, concat, switchMap } from 'rxjs';
import { AppData } from './models/app-data';

@Injectable()
export class AppService {
  constructor() {}

  get app_data(): Observable<AppData> {
    return of({
      questions: [
        {
          id: '1',
          name: 'Question 1',
        },
        {
          id: '2',
          name: 'Question 2',
        },
      ],
    }).pipe(delay(3000));
  }
}

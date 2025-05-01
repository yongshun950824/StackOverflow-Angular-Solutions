import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  grabTimeContent(): Observable<any> {
    const data = {
      tableTime: [
        {
          start_time: '10:08'
        },
        {
          start_time: '15:25'
        },
        {
          start_time: '16:58'
        },
        {
          start_time: '20:18'
        }
      ]
    };

    return of(data);
  }
}

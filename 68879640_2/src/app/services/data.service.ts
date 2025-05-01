import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import moment from 'moment';

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

    return of(data).pipe(
      map(x => {
        return {
          ...x,
          tableTime: x.tableTime.map(obj => {
            return {
              start_time: moment(obj.start_time, 'HH:mm').format('hh:mm A')
            };
          })
        };
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ItemsService {
  list(): Observable<any[]> {
    return of([
      {
        idItem: 1,
        nameItem: 'Item 1',
      },
      {
        idItem: 2,
        nameItem: 'Item 2',
      },
      {
        idItem: 3,
        nameItem: 'Item 3',
      },
    ]);
  }
}

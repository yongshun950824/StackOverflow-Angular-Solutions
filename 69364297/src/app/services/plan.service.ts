import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BasePartFormatted } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  getParts(id: number): Observable<BasePartFormatted[]> {
    return of([
      {
        item1: 'Item 1A',
        item2: 'Item 1B',
        item3: 'Item 1C',
        item4: 'Item 1D',
      },
      {
        item1: 'Item 2A',
        item2: 'Item 2B',
        item3: 'Item 2C',
        item4: 'Item 2D',
      },
      {
        item1: 'Item 3A',
        item2: 'Item 3B',
        item3: 'Item 3C',
        item4: 'Item 3D',
      },
    ]);
  }
}

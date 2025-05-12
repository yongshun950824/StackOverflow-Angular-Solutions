import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class DishService {
  getDishes(): Observable<any[]> {
    return of([]);
  }
}

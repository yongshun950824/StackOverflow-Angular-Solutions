import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  getItemDetails(uid: number): Observable<any> {
    return of({
      id: 117,
      TypeId: 1,
      item1Qty: 563,
      item2Qty: 3.0,
      item3Qty: 0,
      itemType: 'Discount'
    });
  }
}

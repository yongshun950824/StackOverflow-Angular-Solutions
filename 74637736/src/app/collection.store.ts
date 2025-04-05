import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CollectionStore {
  _currentCollection: BehaviorSubject<any[]> = new BehaviorSubject([
    { id: 1 },
    { id: 2 },
  ]);

  moveRowsDown(): Observable<any[]> {
    let trigger = true;
    if (trigger) {
      return throwError(() => new Error());
    } else {
      return this._currentCollection.asObservable();
    }
  }

  // collections.store.ts
  // moveRowsDown(selectedRows: DtRow[]): Observable<DtCollection> {
  //   // let trigger = false;

  //   // manipulate table...

  //   if (trigger) {
  //     throw new Error(); // this does not work
  //   } else {
  //     this.setCurrentCollection(tempCollection as DtCollection);
  //     // how do I return trigger along with the asObservable?
  //     return this._currentCollection.asObservable();
  //   }
  // }
}

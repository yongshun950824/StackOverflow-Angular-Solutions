import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class DataService {
  constructor() {}

  getSales() {
    return of({
      Application: {
        subLable: 'Nice',
        count: 9,
      },
      //Application: {
      //  subLable: 'ppr',
      //  count: 8,
      //},
      chanel: {
        subLable: 'ddd',
        count: 3,
      },
    });
  }
}

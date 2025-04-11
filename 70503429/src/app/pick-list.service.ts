import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class PickListService {
  constructor() {}

  data: any[] = [
    {
      id: 1,
      description: '1 - Gulf Coast',
    },
    {
      id: 2,
      description: '10 - West Great Lakes',
    },
    {
      id: 3,
      description: '11 - California',
    },
  ];

  getregion(accountId: number, searchString: string) {
    return of({
      data: this.data,
    });
  }
}

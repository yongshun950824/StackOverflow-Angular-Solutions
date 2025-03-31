import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: any[] = [{ id: 1, amount: 510, discount: 10, total: 500 }];
//[{ id: 1 }, { id: 2 }, { id: 3 }];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = [
    'id',
    'orderStatus',
    'amount',
    'discount',
    'total',
    'orderStatus',
  ];
  dataSource = ELEMENT_DATA;

  orderprocessing: any[] = [
    { id: 1, name: 'Ordered' },
    { id: 2, name: 'Packed' },
  ];

  changestatus(e: any, row: any) {
    console.log(e.target.value);
    console.log(row);
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */

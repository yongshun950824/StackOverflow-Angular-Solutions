import {
  ChangeDetectorRef,
  Component,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { NgFor } from '@angular/common';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrl: 'table-basic-example.css',
  templateUrl: 'table-basic-example.html',
  imports: [MatTableModule, MatSortModule, NgFor],
})
export class TableBasicExample {
  @ViewChild('outerSort', { static: true }) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<any>>;
  columnsToDisplay = ['Store', 'address', 'employees'];
  innerDisplayedColumns = ['Name', 'Role'];

  stores: any[] = [
    {
      StoreID: '1',
      Store: 'Staples',
      address: '123 Main Street, San Diego CA 12345',
      employees: [
        {
          StoreID: '1',
          Name: 'John Doe',
          Role: 'Manager',
        },
        {
          StoreID: '1',
          Name: 'John Smith',
          Role: 'Cashier',
        },
        {
          StoreID: '1',
          Name: 'Jane Doe',
          Role: 'Shipping',
        },
      ],
    },
    {
      StoreID: '2',
      Store: 'Best Buy',
      address: '456 Main Street, San Diego CA 12345',
      employees: [
        {
          StoreID: '2',
          Name: 'John Smith',
          Role: 'Manager',
        },
        {
          StoreID: '2',
          Name: 'Jane Doe',
          Role: 'Cashier',
        },
        {
          StoreID: '2',
          Name: 'John Doe',
          Role: 'Shipping',
        },
      ],
    },
  ];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    let storesData: any[] = this.stores.map((store) => ({
      ...store,
      employees: new MatTableDataSource(store.employees || []),
    }));

    this.dataSource = new MatTableDataSource(storesData);
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.innerTables.forEach((table, index) => {
      const dataSource = table.dataSource as MatTableDataSource<any>;
      dataSource.sort = this.innerSort.toArray()[index];
    });
  }
}

/**  Copyright 2025 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */

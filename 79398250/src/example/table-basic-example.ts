import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import {
  MatHeaderRowDef,
  MatTable,
  MatTableModule,
} from '@angular/material/table';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
  standalone: true,
  imports: [MatTableModule, CommonModule],
})
export class TableBasicExample {
  columns = [
    { field: 'position', header: 'No' },
    { field: 'name', header: 'Name' },
    { field: 'weight', header: 'Weight' },
    { field: 'symbol', header: 'Symbol' },
  ];
  displayedColumns: string[] = this.columns.map((col) => col.field);
  dataSource = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatHeaderRowDef, { static: true }) headerDef: MatHeaderRowDef;

  constructor(private cdf: ChangeDetectorRef) {}

  test() {
    this.columns = [
      { field: 'position', header: 'Position' },
      { field: 'name', header: 'Element Name' },
      { field: 'weight', header: 'Mass' },
      { field: 'symbol', header: 'Symbol' },
    ];
    this.displayedColumns = [...this.columns.map((col) => col.field)];
    this.table.removeHeaderRowDef(this.headerDef);
  }
}

/**  Copyright 2025 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */

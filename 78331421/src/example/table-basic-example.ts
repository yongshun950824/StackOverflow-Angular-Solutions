import { NgIf } from '@angular/common';
import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: any[] = [
  {empno: 1, Employeenum: 'Hydrogen', isactive: 'y',},
  {empno: 2, Employeenum: 'Helium', isactive: 'y'},
  {empno: 3, Employeenum: 'Lithium', isactive: 'n'},
  {empno: 4, Employeenum: 'Beryllium', isactive: 'n'},
  {empno: 5, Employeenum: 'Boron', isactive: 'y'},
  {empno: 6, Employeenum: 'Carbon', isactive: 'n'},
  {empno: 7, Employeenum: 'Nitrogen', isactive: 'y'},
  {empno: 8, Employeenum: 'Oxygen', isactive: 'y'},
  {empno: 9, Employeenum: 'Fluorine', isactive: 'n'},
  {empno: 10, Employeenum: 'Neon', isactive: 'y'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrl: 'table-basic-example.css',
  templateUrl: 'table-basic-example.html',
  standalone: true,
  imports: [MatTableModule, NgIf],
})
export class TableBasicExample {
  displayedColumns: string[] = ['empno', 'Employeenum', 'isactive'];
  dataSource = ELEMENT_DATA;
}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
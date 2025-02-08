import {
  CommonModule,
  NgFor,
  NgSwitch,
  NgTemplateOutlet,
} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface tableData {
  sno: number;
  instances: string;
  cpu: number;
  ram: number;
  load: number;
  disk: number;
}

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrl: 'table-basic-example.css',
  templateUrl: 'table-basic-example.html',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatPaginatorModule, MatSortModule],
})
export class TableBasicExample {
  dataForTable: tableData[] = [];
  cpuData = [];
  ramData = [];
  loadData = [];
  diskData = [];

  displayedColumns: string[] = [
    'sno',
    'instances',
    'cpu',
    'ram',
    'load',
    'disk',
  ];
  dataSource = new MatTableDataSource(this.dataForTable);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private httpclient: HttpClient //private httpService: HttpService
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    //this.httpService.getData(request)
    this.httpclient.get('/assets/data.json').subscribe((response: any) => {
      try {
        const jsonBody = response['body'];
        const appData = jsonBody['AppData'];
        this.dataForTable = appData as tableData[];
        this.dataSource = new MatTableDataSource(this.dataForTable);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      } catch (e: any) {
        console.log('Error in parsing json ' + e.message);
      }
    });
  }

  fetchProxyData(data: any) {}
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */

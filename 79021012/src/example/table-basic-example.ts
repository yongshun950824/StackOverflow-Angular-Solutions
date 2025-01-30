import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrl: 'table-basic-example.css',
  templateUrl: 'table-basic-example.html',
  standalone: true,
  imports: [MatTableModule, NgFor, DatePipe],
})
export class TableBasicExample {
  displayedColumns = [
    'unitRateType',
    'rateChangeType',
    'effectiveDate',
    'noticeDays',
    'value',
    'recurringPeriod',
  ];
  datasources: MatTableDataSource<any[]>[] = [];

  filteredSizeCode: any[] = [
    {
      unitTypeSizeConcat: ['HJHJ', 'ABC'],
      list: [
        {
          id: '6665c40f93ff924ef96e05de',
          subscriberId: '6331733aa38f414a418ab3fc',
          locationId: '64f85dff2f4280212657f7e7',
          description: 'test',
          unitRateType: 'Rented Unit Below Board Rate',
          unitRateTypeId: 1,
          rateChangeType: 'Rotating Fixed Amount',
          value: '5',
          effectiveDate: '01/01/2024',
          recurringPeriod: '5',
          noticeDays: '5',
          applyBySize: true,
          applyByUnit: false,
          applyByUnitSizeCode: '6662dc6325bec37c0cedf0d9',
          applyByUnits: [],
          applyByUnitId: 'MongoObjectId(id=null)',
          applyByUnitName: null,
          revisionHistory: 0,
          unitTypeSizeConcat: 'HJHJ;ABC',
          lastRateChangeDate: null,
          lastRateChangeAmount: null,
          noticeDate: null,
        },
        {
          id: '66f4f05eb5c2b8424c431fc7',
          subscriberId: '6331733aa38f414a418ab3fc',
          locationId: '64f85dff2f4280212657f7e7',
          description: 'ghgh',
          unitRateType: 'Rented Unit Below Board Rate',
          unitRateTypeId: 1,
          rateChangeType: 'Rotating Fixed Amount',
          value: '2',
          effectiveDate: null,
          recurringPeriod: '2',
          noticeDays: '2',
          applyBySize: true,
          applyByUnit: false,
          applyByUnitSizeCode: '6662dc6325bec37c0cedf0d9',
          applyByUnits: [
            '666ab7306ac32055804a25b5',
            '666bdba59783af20ce55b5ff',
            '6679aba38a764d4b153d6d8d',
            '667aac1bbcb1e01439e96368',
            '667d1b6d0306513a6c75ed30',
            '66c5d8e97cf2c6598e91c134',
          ],
          applyByUnitId: '000000000000000000000000',
          applyByUnitName: null,
          revisionHistory: 0,
          unitTypeSizeConcat: 'HJHJ;ABC',
          lastRateChangeDate: null,
          lastRateChangeAmount: null,
          noticeDate: null,
        },
      ],
    },
  ];

  ngOnInit() {
    this.filteredSizeCode.forEach((size: any) => {
      let data: any[] = size.list.map((x: any) => ({ ...size, list: x }));

      this.datasources.push(new MatTableDataSource(data));
    });
  }
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */

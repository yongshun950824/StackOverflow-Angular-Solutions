import { Component } from '@angular/core';
import { MatTabsModule, MatTabChangeEvent } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';

/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'tab-group-basic-example',
  templateUrl: 'tab-group-basic-example.html',
  standalone: true,
  imports: [
    MatTabsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    NgFor,
  ],
})
export class TabGroupBasicExample {
  investorDashboardData = {
    investorSchemes: [
      {
        schemeName: 'Scheme 2023',
        displayDates: [
          new Date('2023-01-01T00:00:00Z'),
          new Date('2023-02-01T00:00:00Z'),
          new Date('2023-03-01T00:00:00Z'),
        ],
      },
      {
        schemeName: 'Scheme 2024',
        displayDates: [
          new Date('2024-04-01T00:00:00Z'),
          new Date('2024-05-01T00:00:00Z'),
          new Date('2024-06-01T00:00:00Z'),
        ],
      },
    ],
  };

  selectedDate = new Date();

  tabChange(event: MatTabChangeEvent) {
    this.selectedDate =
      this.investorDashboardData.investorSchemes[event.index].displayDates[0];
  }
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */

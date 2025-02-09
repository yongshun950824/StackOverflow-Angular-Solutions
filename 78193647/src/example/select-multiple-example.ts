import { Component, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOption, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgForOf } from '@angular/common';

/** @title Select with multiple selection */
@Component({
  selector: 'select-multiple-example',
  templateUrl: 'select-multiple-example.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgForOf,
  ],
})
export class SelectMultipleExample {
  months: any[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  selected_months = new FormControl();
  @ViewChild('ev') selectAllOption!: MatOption;

  onMonthsSelected($event: any) {
    // What to do?

    if ($event.value && $event.value[0] === 0) return;

    if (
      this.months.length == $event.value.length &&
      this.months.every((x, i) => x === $event.value[i])
    )
      this.selectAllOption.select(false);
    else this.selectAllOption.deselect(false);
  }

  selectAllMonths(ev: any) {
    if (ev._selected) {
      this.selected_months.patchValue(this.months);
      ev._selected = true;
    }
    if (!ev._selected) {
      this.selected_months.setValue([]);
    }
  }
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */

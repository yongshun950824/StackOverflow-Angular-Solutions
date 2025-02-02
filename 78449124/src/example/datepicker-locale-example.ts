import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter,
  provideMomentDateAdapter,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDatepickerModule,
  MatDatepickerIntl,
  MatDatepicker,
} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import 'moment/locale/ja';
import 'moment/locale/fr';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Moment } from 'moment';
import moment from 'moment';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'MMMM YYYY', // this is the format showing on the input element
    monthYearLabel: 'MMMM YYYY', // this is showing on the calendar
  },
};

/** @title Datepicker with different locale */
@Component({
  selector: 'datepicker-locale-example',
  templateUrl: 'datepicker-locale-example.html',
  styleUrl: 'datepicker-locale-example.css',
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
  ],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class DatepickerLocaleExample implements OnInit {
  constructor(
    private _adapter: DateAdapter<any>,
    private _intl: MatDatepickerIntl,
    @Inject(MAT_DATE_LOCALE) private _locale: string
  ) {}

  form: FormGroup = new FormGroup({
    date: new FormControl(),
  });

  ngOnInit() {}

  control = new FormControl();
  chosenYearHandler(normalizedYear: Moment) {
    //const ctrlValue = this.control.value ;
    //ctrlValue.year(normalizedYear.year());
    //this.control.setValue(ctrlValue);
  }

  chosenMonthHandler(
    normalizedMonth: Moment,
    datepicker: MatDatepicker<Moment>
  ) {
    //console.log(normalizedMonth)
    //const ctrlValue = this.control.value ?? moment();
    //ctrlValue.month(normalizedMonth.month());
    this.control.setValue(normalizedMonth);
    datepicker.close();
  }
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */

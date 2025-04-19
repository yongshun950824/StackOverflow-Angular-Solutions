import { Component, Inject, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
//import * as moment  from 'moment';
import {
  JalaliMomentDateAdapter,
  PERSIAN_DATE_FORMATS,
} from './jalali-moment-date-adapter';

import moment from 'moment-jalaali';
const minmin = moment;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fa-IR' },
    {
      provide: DateAdapter,
      useClass: JalaliMomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS },
  ],
})
export class AppComponent implements OnInit {
  form!: FormGroup;
  filterModel: any = {};

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DATE_LOCALE) private locale,
    @Inject(DateAdapter) private dateAdapter
  ) {}

  ngOnInit() {
    minmin.loadPersian();

    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      fromDate: new FormControl(),
      toDate: new FormControl(),
    });

    let filterModel: any = {
      fromCreateDate: '2021/09/01',
      toCreateDate: '2021/09/30',
      //fromCreateDate: '1400/06/10', // Persian Date
      //toCreateDate: '1400/07/08', // Persian Date
    };

    if (filterModel.fromCreateDate && filterModel.toCreateDate) {
      this.form
        .get('fromDate')
        ?.setValue(this.convertToMiladi(filterModel.fromCreateDate));
      this.form
        .get('toDate')
        ?.setValue(this.convertToMiladi(filterModel.toCreateDate));
    }
  }

  convertToMiladi(date: string) {
    return moment(date, 'YYYY/MM/DD');
  }

  onFormSubmit() {
    console.log(this.form.value);
  }
}

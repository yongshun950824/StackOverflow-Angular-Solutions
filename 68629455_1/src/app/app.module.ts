import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatButtonModule
} from '@angular/material';

import { RangesFooter } from './ranges-footer.component';
import {
  MAT_DATE_FORMATS,
  DateAdapter,
  MAT_DATE_LOCALE
} from 'saturn-datepicker';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD'
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@NgModule({
  declarations: [AppComponent, RangesFooter],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SatDatepickerModule,
    SatNativeDateModule
  ],
  entryComponents: [RangesFooter],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

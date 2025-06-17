import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<div #valueContainer style="float: right; position: relative;">
  <div style="display: flex; border: 1px solid gray;">
    <input #inputField [value]="singleValue" [matDatepicker]="pickerSingle" />
    <mat-icon #pickerSingleIcon fontSet="material-symbols-outlined" (click)="pickerSingle.open()">calendar_today_outlined</mat-icon>
    <mat-datepicker #pickerSingle (opened)="onPickerSingleOpened()" panelClass="custom-calendar"></mat-datepicker>
  </div>
</div>
  `,
  styles: `
  .custom-calendar .mat-datepicker-content {
    position: absolute;
    top: auto; /* Adjust top position if needed */
    bottom: 0;
    right: 0;
    transform: translateY(calc(100% + 15px)); /* Adjust for any offsets if needed */
    z-index: 1000; /* Ensure it's above other elements */
  }
  `,
})
export class AppComponent {}

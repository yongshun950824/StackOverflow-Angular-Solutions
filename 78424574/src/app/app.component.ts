import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'nz-demo-date-picker-start-end',
  templateUrl: `app.component.html`,
  styles: [
    `
      nz-date-picker {
        margin: 0 8px 12px 0;
      }
    `,
  ],
})
export class NzDemoDatePickerStartEndComponent {
  @ViewChild('endDatePicker') endDatePicker!: NzDatePickerComponent;

  purchaseOrderForm!: FormGroup;

  disabledDeliveryDate = (date: Date): boolean => {
    let issueDate = this.purchaseOrderForm.controls.issue_date.value;
    if (!issueDate || !date) {
      return false;
    }
    return date.getTime() <= new Date(issueDate).getTime();
  };

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.purchaseOrderForm = new FormGroup({
      issue_date: new FormControl(new Date().toISOString()),
      delivery_date: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
    });
  }
}

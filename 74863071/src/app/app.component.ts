import { Component, VERSION } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  shippingLocationDetailsUpdateForm!: FormGroup;

  ngOnInit() {
    this.shippingLocationDetailsUpdateForm = new FormGroup({
      //...
      customDetails: new FormArray([]),
    });

    this.addCustomDetailsForm();

    // this.shippingLocationDetailsUpdateForm.enable();
  }

  get customDetailsFormArray() {
    return this.shippingLocationDetailsUpdateForm.get(
      'customDetails'
    ) as FormArray;
  }

  addCustomDetailsForm() {
    this.customDetailsFormArray.push(
      new FormGroup({
        customRegNumber: new FormControl(''),
        customCode: new FormControl(''),
        customRegistrationtype: new FormControl(''),
        customRegStartDate: new FormControl(''), // <----------- disable this when user clicks a button
        customRegEndDate: new FormControl(''),
      })
    );
  }

  disableCustomRegStartDateControl(i: number) {
    this.shippingLocationDetailsUpdateForm
      .get(`customDetails.${i}.customRegStartDate`)
      ?.disable();
  }

  disableAllCustomRegStartDateControl() {
    for (let formGroup of this.customDetailsFormArray.controls) {
      formGroup.get('customRegStartDate')?.disable();
    }
  }
}

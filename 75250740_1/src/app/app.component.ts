import { Component, VERSION } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  partnerInvoiceDetailsForm!: FormGroup;
  rebateIdMap = ['0', '1'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.partnerInvoiceDetailsForm = this.fb.group({
      rebates: new FormGroup({
        territories: new FormGroup({
          rebateTier: new FormControl(null, []),
          rebateValue: new FormControl(null),
          rebateActive: new FormControl(null),
        }),
      }),
    });

    const myFormValidator = this.myFormValidator(
      () => this.rebateActive(this.rebateIdMap[1]).value,
      Validators.required
    );

    this.partnerInvoiceDetailsForm
      .get('rebates.territories.rebateActive')
      .valueChanges.subscribe((value) => {
        console.log(value);

        if (value)
          this.partnerInvoiceDetailsForm
            .get('rebates.territories.rebateTier')
            .addValidators(myFormValidator);
        else
          this.partnerInvoiceDetailsForm
            .get('rebates.territories.rebateTier')
            .removeValidators(myFormValidator);

        this.partnerInvoiceDetailsForm
          .get('rebates.territories.rebateTier')
          .updateValueAndValidity();
      });
  }

  rebateActive(value: string) {
    return { value: true };
  }

  private myFormValidator(
    predicate: Function,
    validator: ValidatorFn
  ): ValidatorFn {
    return (formControl: FormControl) => {
      if (!formControl.parent) {
        return null;
      }

      console.log(predicate());
      let error = null;
      if (predicate()) {
        console.log('predicate()');
        return validator(formControl);
      }
      return null;
    };
  }
}

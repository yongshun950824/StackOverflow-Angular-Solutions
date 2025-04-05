import { Component, VERSION } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  segmentIds = [];
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this._createForm({
      segmentIds: [],
      excludedPeriods: [
        {
          dateFrom: new Date('2021-05-01T00:00:00z'),
          dateTo: new Date('2021-06-01T00:00:00z'),
        },
      ],
      activeFrom: new Date('2021-01-01T00:00:00z'),
      activeTo: new Date('2023-01-01T00:00:00z'),
    });
  }

  private _createForm(product?: IProduct): void {
    console.log('_createForm ~ product', product.excludedPeriods);
    this.segmentIds = product?.segmentIds ?? [];
    const excludedPeriods = product?.excludedPeriods ?? [];

    this.productForm = this.fb.group({
      activeFrom: [product?.activeFrom],
      activeTo: [product?.activeTo],
      excludedPeriods: this.fb.array(
        // For Solution 1
        excludedPeriods.map((x) =>
          this.fb.group({
            dateFrom: [x.dateFrom],
            dateTo: [x.dateTo],
          })
        )
        // For Solution 2
        // []
      ),
    });

    // For Solution 2
    // this.addFormGroupToExcludePeriodsList(excludedPeriods);
  }

  excludedPeriodsList(): FormArray {
    return this.productForm.get('excludedPeriods') as FormArray;
  }

  // For Solution 2
  addFormGroupToExcludePeriodsList(
    excludedPeriods: { dateFrom: Date; dateTo: Date }[]
  ) {
    for (let excludePeriod of excludedPeriods) {
      this.excludedPeriodsList().push(
        this.fb.group({
          dateFrom: [excludePeriod.dateFrom],
          dateTo: [excludePeriod.dateTo],
        })
      );
    }

    console.log(this.excludedPeriodsList().controls[0]);
  }

  newExcludePeriod(): FormGroup {
    return this.fb.group({
      dateFrom: '',
      dateTo: '',
    });
  }

  addExcludedPeriod() {
    this.excludedPeriodsList().push(this.newExcludePeriod());
  }

  registrationForm = new FormGroup({
    registrations: new FormArray([this.patchRegistrationValues()]),
  });

  patchRegistrationValues(): FormGroup {
    return new FormGroup({
      //some other FormControls
      setDate: new FormArray([]),
    });
  }

  get registrations(): FormArray {
    return this.registrationForm.get('registrations') as FormArray;
  }

  get setDate(): FormArray {
    return this.registrations.get('setDate') as FormArray;
  }
}

export interface IProduct {
  segmentIds: any[];
  activeFrom: Date;
  activeTo: Date;
  excludedPeriods: { dateFrom: Date; dateTo: Date }[];
}

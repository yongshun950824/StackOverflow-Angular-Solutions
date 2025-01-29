import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgFor } from '@angular/common';

interface Food {
  value: string;
  viewValue: string;
}

/**
 * @title Basic select
 */
@Component({
  selector: 'select-overview-example',
  templateUrl: 'select-overview-example.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
  ],
})
export class SelectOverviewExample {
  countryForm: FormGroup;
  countries: any[] = [
    { id: 1, name: 'United States' },
    { id: 2, name: 'Canada' },
    { id: 3, name: 'United Kingdom' },
    { id: 4, name: 'Australia' },
    { id: 5, name: 'Germany' },
    { id: 6, name: 'France' },
    { id: 7, name: 'Italy' },
    { id: 8, name: 'Spain' },
    { id: 9, name: 'India' },
    { id: 10, name: 'China' },
    { id: 11, name: 'Japan' },
    { id: 12, name: 'Brazil' },
    { id: 13, name: 'South Africa' },
    { id: 14, name: 'Mexico' },
    { id: 15, name: 'Russia' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.countryForm = this.fb.group({
      countryControl: [''],
    });
  }

  patchFormWithCountry() {
    const selectedCountries = [
      { id: 1, name: 'United States' },
      { id: 2, name: 'Canada' },
      { id: 3, name: 'United Kingdom' },
      { id: 4, name: 'Australia' },
    ];

    this.countryForm.patchValue({
      countryControl: selectedCountries,
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.countryForm.value);
  }

  countryCompareWithFn = (country: any, value: any) => country.id == value.id;
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */

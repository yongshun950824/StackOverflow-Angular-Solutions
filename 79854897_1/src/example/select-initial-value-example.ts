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
import { CommonModule } from '@angular/common';

interface Food {
  _id: string;
  fullName: string;
}

/**
 * @title Basic select with initial value and no form
 */
@Component({
  selector: 'select-initial-value-example',
  templateUrl: 'select-initial-value-example.html',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class SelectInitialValueExample {
  foods: Food[] = [
    { _id: 'steak-0', fullName: 'Steak' },
    { _id: 'pizza-1', fullName: 'Pizza' },
    { _id: 'tacos-2', fullName: 'Tacos' },
  ];

  form!: FormGroup;

  employee: any = {
    managers: ['pizza-1', 'tacos-2'],
  };

  empNames = this.foods;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      ///....
      managers: [''],
      team: [''],

      managerIDs: [''],
      /// ...
    });

    this.form.patchValue(this.employee);
  }

  compareSelectOptions(option1: any, option2: any) {
    return option1 === option2;
  }
}

/**  Copyright 2025 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */

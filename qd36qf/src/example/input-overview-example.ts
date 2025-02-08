import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PhoneFormatterDirective } from 'src/phone-formatter.directive ';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'input-overview-example',
  styleUrl: 'input-overview-example.css',
  templateUrl: 'input-overview-example.html',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    PhoneFormatterDirective
  ],
})
export class InputOverviewExample {
  form: FormGroup = new FormGroup({
    phone: new FormControl(null, [
      Validators.pattern('^[0-9]{3}-[0-9]{3}-[0-9]{4}$'),
    ]),
  });
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */

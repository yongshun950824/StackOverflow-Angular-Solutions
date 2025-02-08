import { Component, ViewChild } from '@angular/core';
import {
  MatChipGrid,
  MatChipInputEvent,
  MatChipsModule,
} from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { JsonPipe } from '@angular/common';

const REGEXP_EMAIL =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

export const emailsArrayValidator = (control: FormControl) => {
  const emails: string[] = Array.isArray(control.value) ? control.value : [];
  const invalidEmails = emails.filter(
    (email) => !REGEXP_EMAIL.test(email.trim())
  );
  return invalidEmails.length === 0 ? null : { invalidEmails: true };
};

/**
 * @title Basic chips
 */
@Component({
  selector: 'chips-overview-example',
  templateUrl: 'chips-overview-example.html',
  standalone: true,
  imports: [
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    JsonPipe,
  ],
})
export class ChipsOverviewExample {
  inviteForm!: FormGroup;
  friendsErrorMessage: string = '';
  separatorKeysCodes = [ENTER, COMMA];
  addOnBlur: boolean = true;

  @ViewChild('chipGrid') chipGrid: MatChipGrid;

  constructor(private fb: FormBuilder) {
    this.inviteForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(REGEXP_EMAIL)]],
      date: ['', Validators.required],
      friends: [
        [],
        [Validators.required, Validators.minLength(1), emailsArrayValidator],
      ],
    });
  }

  get name() {
    return this.inviteForm.get('name') as FormControl;
  }

  get email() {
    return this.inviteForm.get('email') as FormControl;
  }

  get date() {
    return this.inviteForm.get('date') as FormControl;
  }

  get friends() {
    return this.inviteForm.get('friends') as FormControl;
  }

  addFriend(event: MatChipInputEvent) {
    const friendEmail = event.value.trim();

    if (!friendEmail || friendEmail == '')
      return;

    const friends = [...this.friends.value, friendEmail];
    const validationErrors = emailsArrayValidator(new FormControl(friends));
    console.log(validationErrors);
    if (validationErrors) {
      this.friendsErrorMessage = 'The last email is not valid';
      this.friends.setErrors(validationErrors, { emitEvent: false });
      this.chipGrid.errorState = true;
    } else {
      this.chipGrid.errorState = false;
      this.friends.setErrors({ invalidEmails: null });

      this.friendsErrorMessage = '';
      this.friends.setValue(friends);
    }

    this.friends.markAsTouched();
    event.chipInput!.clear();
  }

  removeFriend(email: string) {
    const friends = this.friends.value.slice();
    const index = friends.indexOf(email);
    if (index !== -1) {
      friends.splice(index, 1);
      this.friends.setValue(friends);
    }
  }
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */

import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { matchingPasswords } from './types/password-match-validator';

import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

export class ConfirmedPasswordErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return !!(
      control &&
      (control.invalid || form?.errors?.['mismatch']) &&
      (control.dirty || control.touched || (form && form.submitted))
    );
  }
}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: `main.html`,
})
export class App {
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/),
  ]);

  confirmedPassword = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  passwordForm: FormGroup = new FormGroup(
    {
      password: this.password,
      confirmedPassword: this.confirmedPassword,
    },
    {
      validators: [matchingPasswords],
    }
  );

  confirmedPasswordErrorStateMatcher = new ConfirmedPasswordErrorStateMatcher();

  hidePasswordButton = false;
  hideConfirmedPasswordButton = true;

  isInputDisabled() {
    return false;
  }

  onPasswordInput(password: string) {}

  onConfirmedPasswordInput(password: string) {}
}

bootstrapApplication(App, {
  providers: [provideAnimations()],
});

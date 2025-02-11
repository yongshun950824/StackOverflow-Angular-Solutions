import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
} from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

export class FormValidators {
  static matchPwdValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      console.log(control);
      const password = control.parent?.get('password');
      const confirmPwd = control.parent?.get('confirmPwd');

      console.log('password:', password?.value);
      console.log('confirmPwd:', confirmPwd?.value);

      if (!password || !confirmPwd || password.value !== confirmPwd.value) {
        return { PwdNotMatched: true };
      }

      return null;
    };
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class App {
  name = 'Angular';
  cpwdError: boolean = false;

  sampleForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.sampleForm = this.formBuilder.group({
      password: ['' /*FormValidators.passwordValidator()*/],
      confirmPwd: ['', FormValidators.matchPwdValidator()],
    });

    this.sampleForm.get('confirmPwd')?.statusChanges.subscribe(() => {
      this.updateErrorFlags('confirmPwd');
    });
  }

  private updateErrorFlags(controlName: string): void {
    const control = this.sampleForm.get(controlName);
    if (control) {
      switch (controlName) {
        case 'confirmPwd':
          this.cpwdError = control.hasError('PwdNotMatched') && control.dirty;
          break;
      }
    }
  }
}

bootstrapApplication(App);

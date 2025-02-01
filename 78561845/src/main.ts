import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export function trimValidator(
  minlength: number,
  maxlength: number
): ValidatorFn {
  return ({ value }: AbstractControl): ValidationErrors | null => {
    const trimValue = value?.trim() || '';
    if (trimValue.length < minlength) {
      return { minlength: true };
    } else if (trimValue.length > maxlength) {
      return { minlength: true };
    }

    return null;
  };
}

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';

  trimValidator = trimValidator(10, 3000);

  constructor(private fb: FormBuilder) {}

  myform = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [this.trimValidator]],
  });

  ngOnInit() {
    console.log(this.myform.get('name')?.hasValidator(Validators.required)); // true

    console.log(
      this.myform.get('description')?.hasValidator(this.trimValidator)
    ); // false
  }
}

bootstrapApplication(App);

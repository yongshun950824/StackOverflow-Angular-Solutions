import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Validator } from 'ip-num';

export function isValidIPv4String(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let [isValid, _] = Validator.isValidIPv4String(control.value);

    if (!isValid) return { isValidIPv4: true };

    return null;
  };
}

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <form [formGroup]="formGroup">
      <input formControlName="tunic" />

      {{ formGroup.get('tunic')!.errors | json }}
    </form>
  `,
  imports: [FormsModule, ReactiveFormsModule, JsonPipe],
})
export class App {
  name = 'Angular';

  constructor(private formBuilder: FormBuilder) {}

  formGroup: FormGroup = this.formBuilder.group({});

  ngOnInit() {
    this.formGroup.addControl(
      'tunic',
      this.formBuilder.control('', [
        Validators.required,
        Validators.maxLength(15),
        isValidIPv4String(),
      ])
    );
  }
}

bootstrapApplication(App);

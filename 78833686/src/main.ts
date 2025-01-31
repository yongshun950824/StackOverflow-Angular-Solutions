import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { CommonModule } from '@angular/common';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export function maximumCharactersValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log(control.parent);
    let minValue = (control.parent as FormGroup)?.get(
      'minimumCharacters'
    )!.value;

    console.log('control.value: ', control.value);
    let maxValue = control.value;
    if (maxValue > minValue) {
      return { maximumCharactersValid: null };
    } else {
      return { maximumCharactersValid: true };
    }
  };
}

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <form [formGroup]="form">
        Minimum Characters: <input *ngIf="form.get('minimumCharacters')" formControlName="minimumCharacters" />

        <br/>

        Maximum Characters: <input *ngIf="form.get('maximumCharacters')" formControlName="maximumCharacters" />

        <span *ngIf="form.get('maximumCharacters')?.errors?.['maximumCharactersValid']">
        maximumCharacters error
        </span>
</form>
  `,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
})
export class App {
  name = 'Angular';
  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form.addControl(
      'minimumCharacters',
      this.formBuilder.control(1, [Validators.required]),
      { emitEvent: false }
    );

    this.form.addControl(
      'maximumCharacters',
      this.formBuilder.control('', [maximumCharactersValidator()]),
      { emitEvent: false }
    );
  }
}

bootstrapApplication(App);

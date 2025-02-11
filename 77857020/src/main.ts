import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import {
  RxReactiveFormsModule,
  RxwebValidators,
} from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
  ],
})
export class App {
  name = 'Angular';

  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup = this.formBuilder.group({
    fields: this.formBuilder.array([]),
  });

  private createField() {
    return this.formBuilder.group({
      label: ['', [Validators.required, RxwebValidators.unique({ message: "Label must be unique." })]],
    });
  }

  public addField() {
    (this.form.get('fields') as FormArray).push(this.createField());
  }

  get fields() {
    return this.form.get('fields') as FormArray;
  }

  getField(index: number) {
    return (this.form.get('fields') as FormArray).controls[
      `${index}`
    ] as FormGroup;
  }
}

bootstrapApplication(App);

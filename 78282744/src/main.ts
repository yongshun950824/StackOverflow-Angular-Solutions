import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import {
  FormBuilder,
  FormGroup,
  UntypedFormControl,
  ReactiveFormsModule,
  FormsModule,
  FormArray,
} from '@angular/forms';
import { JsonPipe, KeyValuePipe, NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [FormsModule, ReactiveFormsModule, NgForOf, JsonPipe, KeyValuePipe],
})
export class App {
  name = 'Angular';
  form!: FormGroup;
  form2!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // Form with Form Array
    this.form = this.formBuilder.group({
      //---a couple controls---
      properties: this.formBuilder.array([
        // this.formBuilder.group({
        //   label: new UntypedFormControl(),
        //   value: new UntypedFormControl(),
        // }),
        // this.formBuilder.group({
        //   label: new UntypedFormControl(),
        //   value: new UntypedFormControl(),
        // }),
        // this.formBuilder.group({
        //   label: new UntypedFormControl(),
        //   value: new UntypedFormControl(),
        // }),
      ]),
    });

    for (let i = 0; i < 3; i++)
      this.properties.push(this.createPropertyFormGroup());

    // Form with Form Group
    this.form2 = this.formBuilder.group({
      //---a couple controls---
      properties: this.formBuilder.group({
        first: this.createPropertyFormGroup(),
        second: this.createPropertyFormGroup(),
        third: this.createPropertyFormGroup(),
      }),
    });
  }

  createPropertyFormGroup() {
    return this.formBuilder.group({
      label: new UntypedFormControl(),
      value: new UntypedFormControl(),
    });
  }

  get properties() {
    return this.form.controls['properties'] as FormArray;
  }

  get propertiesFormGroup() {
    return this.form2.controls['properties'] as FormGroup;
  }
}

bootstrapApplication(App);

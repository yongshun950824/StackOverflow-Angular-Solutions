import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class App {
  dynamicFormGroup!: FormGroup;
  output!: any;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.dynamicFormGroup = this.formBuilder.group({
      address: new FormArray([this.createItem]),
    });
  }

  addNewAddress(): void {
    (this.dynamicFormGroup.get('address') as FormArray).push(this.createItem);
  }

  get formControllers() {
    return this.dynamicFormGroup.controls;
  }

  get AddressInfo() {
    return this.formControllers['address'] as FormArray;
  }

  get createItem(): FormGroup {
    return this.formBuilder.group({
      streetAddress: [],
      city: [],
      state: [],
    });
  }
  onSubmit() {
    this.output = this.dynamicFormGroup.controls['address'].value;
    console.log(this.output);
  }
}

bootstrapApplication(App);

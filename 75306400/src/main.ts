import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

export interface User {
  name: string;
  myAddress: MyAddress[];
}

export interface MyAddress {
  id?: number;
  line1: string;
  line2: string;
  postalCode: string;
  city: string;
}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>

    <br />
    <button (click)="setDetail()">Set Detail</button>
  `,
})
export class App {
  name = 'Angular';

  constructor(private formBuilder: FormBuilder) {}

  myForm!: FormGroup;

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: this.formBuilder.array([]),
    });

    // Set dummy data
    this.myForm.controls.name.setValue('Name');
    this.addAddressFormGroup();

    this.myAddresses.controls[0].setValue({
      line1: 'Line 1',
      line2: 'Line 2',
      postalCode: 'Postal',
      city: 'City',
    });
  }

  get myAddresses() {
    return this.myForm.controls['address'] as FormArray;
  }

  addAddressFormGroup() {
    const addressData = this.formBuilder.group({
      line1: ['', Validators.required],
      line2: [''],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
    });
    this.myAddresses.push(addressData);
  }

  setDetail(): User {
    let myObj: User = {
      name: this.myForm.controls.name.getRawValue(), //this is how i set other values
      // i need to call address arraydata (line1,line2,city,postalcode) here
      myAddress: this.myAddresses.getRawValue() as MyAddress[],
    };

    console.log(myObj);
    return myObj;
  }
}

bootstrapApplication(App);

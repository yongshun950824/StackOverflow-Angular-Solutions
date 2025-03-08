import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';

  myForm: FormGroup;
  myArray: FormArray<FormGroup<MyTypeForm>>; // <FormControl<MyType>>

  constructor(private _formBuilder: FormBuilder) {
    this.myForm = new FormGroup({
      myArray: this._formBuilder.array([]),
    });
  }

  addElement() {
    this.myArray = this.myForm.get('myArray') as unknown as FormArray;

    this.myArray.push(this._newElement());
  }

  private _newElement(): FormGroup<MyTypeForm> {
    // What type to use ?
    return this._formBuilder.group<MyTypeForm>({
      myValue: this._formBuilder.control(''),
    });
  }
}

export interface MyType {
  myValue: string;
}

export class MyTypeForm {
  myValue: FormControl<string>;
}

bootstrapApplication(App);

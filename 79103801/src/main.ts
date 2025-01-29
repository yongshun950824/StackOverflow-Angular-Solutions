import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  ReactiveFormsModule,
  FormArray,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
  providers: [ReactiveFormsModule],
})
export class App {
  name = 'Angular';

  form!: FormGroup;

  array = [
    { input: 'Input 1', description: 'Desc 1' },
    { input: 'Input 2', description: 'Desc 2' },
    { input: 'Input 3', description: 'Desc 3' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = new FormGroup({
      control: new FormArray([
        // new FormGroup({
        //   input: new FormControl(),
        //   description: new FormControl(),
        // }),  // Create 1 FormGroup will only result 1 object returned from FormArray's value
      ]),
    });

    for (let data of this.array) {
      (this.form.controls['control'] as FormArray).push(
        new FormGroup({
          input: new FormControl(/*data.input*/),
          description: new FormControl(/*data.description*/),
        })
      );
    }

    //this.form.patchValue({ control: this.array });

    console.log(this.form.get('control')!.value);
  }
}

bootstrapApplication(App);

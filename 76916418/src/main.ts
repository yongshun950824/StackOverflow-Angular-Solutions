import 'zone.js/dist/zone';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: 'main.html',
})
export class App {
  name = 'Angular';

  @ViewChild('templates') templates!: ElementRef;
  optionChoice: any = '';
  taxonomyResponse: any = {
    categoryList: [
      {
        name: 'Option 1',
      },
      {
        name: 'Option 2',
      },
      {
        name: 'Option 3',
      },
    ],
  };

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}
  selectForm = this.fb.group({
    name: '',
    email: '',
    options: this.fb.array([this.newOption()]),
  });

  get options(): FormArray {
    return this.selectForm.get('options') as FormArray;
  }

  newOption(): FormGroup {
    return this.fb.group({
      selectOptions: '',
    });
  }

  addOption() {
    this.options.push(this.newOption());
  }

  removeOption(i: number) {
    this.options.removeAt(i);
  }

  onChange() {
    this.optionChoice = this.templates.nativeElement.value;
    console.log(this.optionChoice);

    for (let i = 0; i < this.options.length; i++) {
      (this.options.controls[i] as FormGroup).controls.selectOptions.patchValue(
        this.optionChoice,
        { emitEvent: false }
      );
    }
  }

  submit() {
    console.log(this.selectForm.value);
  }
}

bootstrapApplication(App);

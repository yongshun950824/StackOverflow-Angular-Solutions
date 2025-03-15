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
  templateUrl: 'main.html',
})
export class App {
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

  ngOnInit() {
    this.form = this.fb.group({
      documents: this.fb.array([]),
    });

    this.initDocument();
  }

  initDocument() {
    this.documents.push(this.newDocument());
    this.newDocumentFieldGroup(0);

    console.log(this.documentFields(0).controls.length);
  }

  newDocument() {
    return this.fb.group({
      name: new FormControl(''),
      documentId: new FormControl(''),
      documentFields: this.fb.array([]),
    });
  }

  newDocumentFieldGroup(comIndex: number) {
    this.documentFields(comIndex).push(this.newDocumentFields());

    this.documentFields(comIndex).push(
      this.newDocumentFields('documentSubCategory')
    );
  }

  newDocumentFields(name = 'documentCategory') {
    return this.fb.group({
      name: new FormControl(name),
      value: new FormControl(''),
    });
  }

  get documents() {
    return this.form.controls.documents as FormArray;
  }

  documentFields(comIndex: number) {
    return this.documents.controls[`${comIndex}`].get(
      'documentFields'
    ) as FormArray;
  }

  documentFieldsIndexes(comIndex: number) {
    return Array(this.documentFields(comIndex).controls.length / 2)
      .fill(0)
      .map((x, i) => i * 2);
  }

  submit() {
    console.log(this.form.value);
  }
}

bootstrapApplication(App);

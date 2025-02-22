import 'zone.js/dist/zone';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, QuillModule],
  template: `
  <div id="editor" #editor></div>

  <button (click)="submit()">Submit</button>

  <input [formControl]="nameControl" />

  <div *ngIf="FrmGroup.get('name')?.invalid && (FrmGroup.get('name')?.dirty || FrmGroup.get('name')?.touched)">
    <small class="validation-error">Please provide a name.</small>
  </div>
  `,
})
export class App {
  FrmGroup!: FormGroup;

  @ViewChild('editor', { static: false }) quill!: ElementRef;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.FrmGroup = this.fb.group({
      name: ['', Validators.required],
      Description: ['', Validators.required],
    });
  }

  submit() {
    //this.FrmGroup.get('name')!.setValue(this.quill.root.innerHTML);
    this.FrmGroup.get('name')!.setValue(this.quill?.nativeElement.innerHTML);
    this.FrmGroup.get('name')!.markAsDirty();
    this.FrmGroup.get('name')!.markAsTouched();

    console.log(this.quill?.nativeElement.innerHTML);
  }

  get nameControl() {
    return this.FrmGroup.get('name') as FormControl;
  }
}

bootstrapApplication(App);

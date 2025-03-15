import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class App {
  name = 'Angular';

  constructor(private fb: FormBuilder) {}

  formMain = this.fb.group({
    details: this.fb.array([
      new FormGroup({
        label: new FormControl(''),
        description: new FormControl(''),
      }),
    ]),
  });

  get detailsFormArray() {
    return this.formMain.controls.details as FormArray;
  }
}

bootstrapApplication(App, {
  providers: [provideAnimations()],
});

import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
} from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
  ],
})
export class App {
  name = 'Angular';

  constructor(private fb: FormBuilder) {}

  addDetailsFormGroup() {
    return new FormGroup({
      label: new FormControl(''),
      description: new FormControl(''),
    });
  }

  formMain = this.fb.group({
    details: this.fb.array([this.addDetailsFormGroup()]),
  });

  get detailsFormArray() {
    return this.formMain.controls.details as FormArray;
  }

  addDetails() {
    this.detailsFormArray.push(this.addDetailsFormGroup());
  }
}

bootstrapApplication(App, {
  providers: [provideAnimations()],
});

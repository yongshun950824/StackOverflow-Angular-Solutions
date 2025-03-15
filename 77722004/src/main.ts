import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  FormArray,
FormControl,
} from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import 'zone.js';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    // MatDialogTitle,
    // MatDialogContent,
    // MatDialogActions,
    // MatDialogClose,
    ReactiveFormsModule,
    // MatStepperModule,
    FormsModule,
    CommonModule,
  ],
  providers: [
    // {
    //   provide: STEPPER_GLOBAL_OPTIONS,
    //   useValue: { showError: true },
    // },
  ],
  templateUrl: 'main.html',
})
export class App {
  name = 'Angular';

  constructor(private formBuilder: FormBuilder) {}

  createLoanPaymentsForm: FormGroup = this.formBuilder.group({
    payments: this.formBuilder.array([]),
  });

  createLoan() {}

  get payments() {
    return this.createLoanPaymentsForm.controls['payments'] as FormArray;
  }

  addPayment() {
    this.payments.push(new FormGroup({
      title: new FormControl()
    }));
  }
}

bootstrapApplication(App, {
  providers: [provideAnimations()],
});

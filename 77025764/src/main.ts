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

  data = {
    extraInformation: false,
    cars: [
      {
        Id: 48,
        Period: {
          Start: '2023-08-01', //null,
          End: '2023-08-31', //null,
        },
        Rentalstats: 'Value of Rentalstats', //null,
        Reason: 'Value of Reason', //null,
      },
    ],
  };

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      extraInformation: [this.data.extraInformation, [Validators.required]],
      cars: this.formBuilder.array([]),
    });

    this.initCarFormArray();
  }

  initCarFormArray() {
    for (let car of this.data.cars) {
      let carFormGroup = this.formBuilder.group({
        Reason: new FormControl(car?.Reason, Validators.required),
        Rentalstats: new FormControl(car?.Rentalstats, Validators.required),
        Period: this.initPeriodFormGroup(car.Period),
      });

      this.cars.push(carFormGroup);
    }
  }

  initPeriodFormGroup(period: any) {
    return new FormGroup({
      Start: new FormControl(period?.Start, Validators.required),
      End: new FormControl(period?.End, Validators.required),
    });
  }

  get cars(): FormArray {
    return this.form.controls.cars as FormArray;
  }
}

bootstrapApplication(App);

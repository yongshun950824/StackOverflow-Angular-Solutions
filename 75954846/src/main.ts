import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
} from '@angular/forms';
import { debounceTime, Observable } from 'rxjs';
import { CreditCardValidator } from './creditcardvalidator.directive';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],

  templateUrl: './main.html',
  styleUrls: ['./main.css'],
})
export class App {
  name = 'Angular';

  cardControl: FormControl = new FormControl(
    '',
    //CreditCardValidator.validateCcNumber as ValidatorFn
    // Alternate
    CreditCardValidator.validateCcNumber2()
  );

  value$: Observable<string>;

  constructor() {
    this.value$ = this.cardControl.valueChanges.pipe(debounceTime(400));
  }
}

bootstrapApplication(App);

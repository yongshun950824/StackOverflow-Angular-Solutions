import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

export interface Item {
  code: string;
  label: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [ReactiveFormsModule, CommonModule],
})
export class App {
  currencyForm: FormGroup;
  private formBuilder = inject(FormBuilder);

  constructor() {
    this.currencyForm = this.formBuilder.group({
      currencies: this.formBuilder.array<FormGroup>(
        [
          { code: 'CAD', label: 'Canadian Dollar' },
          { code: 'USD', label: 'United States Dollar' },
          { code: 'EUR', label: 'Euro' },
        ].map((currency) => this.createCurrencyFormGroup(currency))
      ),
    });
  }

  createCurrencyFormGroup(currency: Item) {
    return this.formBuilder.group({
      code: [
        currency.code,
        [Validators.required, Validators.maxLength(3), Validators.minLength(3)],
      ],
      label: [currency.label, Validators.required],
    });
  }

  get currencies(): FormArray {
    return this.currencyForm.get('currencies') as FormArray;
  }

  addCurrency() {
    const currencyControl = this.createCurrencyFormGroup({
      code: '',
      label: '',
    });
    this.currencies.push(currencyControl);
  }

  removeCurrency(index: number) {
    this.currencies.removeAt(index);
  }

  getCurrencyFormGroupByIndex(idx: number) {
    return this.currencies.at(idx) as FormGroup;
  }
}

bootstrapApplication(App);

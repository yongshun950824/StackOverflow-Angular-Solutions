import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
  <div class="container">
    <h1>Favorite Fruits Selector</h1>
    <form [formGroup]="fruitForm" (ngSubmit)="onSubmit()">
      <label>What are your favorite fruits? (Maximum of 3)</label>
      <div *ngFor="let fruit of availableFruits">
        <label>
          <input type="checkbox" [checked]="isFruitSelected(fruit)" [disabled]="!canSelectFruit(fruit)" (change)="onFruitChecked(fruit)"  />
          {{ fruit }}
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  `,
})
export class App {
  fruitForm: FormGroup;
  availableFruits: string[] = [
    'Apple',
    'Pear',
    'Orange',
    'Banana',
    'Grapes',
    'Pineapple',
  ];

  constructor(private formBuilder: FormBuilder) {
    this.fruitForm = this.formBuilder.group({
      fruits: [[]],
    });
  }

  canSelectFruit(fruit: string): boolean {
    return this.isFruitSelected(fruit) || this.getSelectedFruitsCount() < 3;
  }

  getSelectedFruitsCount(): number {
    return this.fruitForm.controls.fruits.value.length;
  }

  isFruitSelected(fruit: string) {
    return this.fruitForm.controls.fruits.value.indexOf(fruit) > -1;
  }

  onFruitChecked(fruit: string) {
    let selectedFruits: string[] = this.fruitForm.controls.fruits.value;
    let selectedFruitIndex = selectedFruits.indexOf(fruit);

    if (selectedFruitIndex > -1) selectedFruits.splice(selectedFruitIndex, 1);
    else selectedFruits.push(fruit);

    this.fruitForm.controls.fruits.setValue(selectedFruits);
  }

  onSubmit() {
    const selectedFruits = this.fruitForm.controls.fruits.value;

    console.log('Selected Fruits:', selectedFruits);
  }
}

bootstrapApplication(App);

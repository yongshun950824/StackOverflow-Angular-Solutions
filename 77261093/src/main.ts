import 'zone.js/dist/zone';
import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="form">
      <p>
        <label for="favFruit"><b>What's your favorite fruit</b></label>
        <br>
        <!--<input type="radio" value="Apple" id="favFruit" name="favFruit" formControlName="favFruit" 
            (change)="onFavFruitChecked($event)"> Apple
        <br>
        <input type="radio" value="Banana" id="favFruit" name="favFruit" formControlName="favFruit" 
            (change)="onFavFruitChecked($event)"> Banana
        <br>
        <input type="radio" value="Orange" id="favFruit" name="favFruit" formControlName="favFruit" 
            (change)="onFavFruitChecked($event)"> Orange
        <br>
        <input type="radio" value="Pear" id="favFruit" name="favFruit" formControlName="favFruit" 
            (change)="onFavFruitChecked($event)"> Pear
        <br>
        <input type="radio" value="Grapes" id="favFruit" name="favFruit" formControlName="favFruit" 
            (change)="onFavFruitChecked($event)"> Grapes
        <br>-->

        <ng-container *ngFor="let fruit of fruits">
          <input type="radio" [value]="fruit" id="favFruit" name="favFruit" formControlName="favFruit" 
              (change)="onFavFruitChecked($event)"> {{ fruit }}
          <br>
        </ng-container>

        <input type="text" value="" id="favFruit" name="favFruit" #otherFavFruit 
            (input)="onOtherFavFruitInput(otherFavFruit.value)">  
      </p>
    </form>

    {{ form.value | json }}
  `,
})
export class App {
  name = 'Angular';

  form = new FormGroup({
    favFruit: new FormControl(''),
  });

  fruits = ['Apple', 'Banana', 'Orange', 'Pear', 'Grapes'];

  @ViewChild('otherFavFruit') otherFavFruit!: ElementRef<HTMLInputElement>;

  onOtherFavFruitInput(value: string) {
    this.form.controls.favFruit.setValue(value);
  }

  onFavFruitChecked(event: any) {
    this.otherFavFruit.nativeElement.value = '';
  }
}

bootstrapApplication(App);

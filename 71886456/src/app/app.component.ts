import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public bottleFormGroup: FormGroup;
  public test: any[0] = [
    {
      bottle1: { name: 'bottle1', quantity: 5 },
      bottle2: { name: 'bottle2', quantity: 15 },
      bottle3: { name: 'bottle3', quantity: 7 },
    },
  ];

  public itemsSelected: any[] = [];

  constructor(private formGrp: FormBuilder) {}
  ngOnInit(): void {
    this.initFormBottle();
    console.log('TEST', this.test[0]);
  }

  public initFormBottle = () => {
    this.bottleFormGroup = this.formGrp.group({
      bottles: this.formGrp.array([this.getBottle()]),
    });
  };

  get getBottles() {
    return this.bottleFormGroup.controls.bottles as FormArray;
  }

  public addBottlesInput = () => {
    const bottleQuantityToAdd = this.formGrp.group({
      product: ['', Validators.required],
      bottleQuantity: ['', Validators.required],
    });
    this.getBottles.push(bottleQuantityToAdd);
    this.itemsSelected.push({});
  };

  public getBottle = () => {
    return this.formGrp.group({
      product: ['', Validators.required],
      bottleQuantity: ['', Validators.required],
    });
  };

  public onSubmit = () => {
    console.warn(this.bottleFormGroup.value);
  };

  public selectTest = (event, i) => {
    if (event) {
      event.index = i;
      console.log('SELECTED', event);
      this.itemsSelected[i] = event.value;
    } else {
      this.itemsSelected[i] = {};
    }
  };
}

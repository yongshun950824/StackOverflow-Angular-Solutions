import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormGroup,
  Validators,
  FormArray,
  FormBuilder,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';

export interface Product {
  id: number;
  product: string;
  price: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [FormsModule, ReactiveFormsModule, NgSelectModule, CommonModule],
})
export class App {
  pform!: FormGroup;
  //iform!: FormGroup;
  products: Product[] = [
    { id: 1, product: 'Apple', price: 5 },
    { id: 2, product: 'Orange', price: 10 },
    { id: 3, product: 'Mango', price: 20 },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createDataForm();
  }

  createDataForm() {
    this.pform = this.fb.group({
      amount: [''],
      issueDate: ['', Validators.required],
      profileId: ['', Validators.required],
      items: this.fb.array([this.createItemFormGroup()]),
    });
  }

  createItemFormGroup() {
    return this.fb.group({
      product: [{ value: {}, disabled: false }],
      quantity: [0, Validators.min(1)],
      price: [''],
      total: [''],
    });
  }

  get items() {
    return this.pform.get('items') as FormArray;
  }

  addItem() {
    this.items.push(this.createItemFormGroup());
    this.calculateTotal();
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
    this.calculateTotal();
  }

  calculateTotal() {
    let sum = 0;
    this.items.controls.forEach((control) => {
      sum += control.value.total;
    });
    this.pform.patchValue({ amount: sum });
    console.log(sum);
  }

  // This will calculate each product Total
  //calItemTotal(control: FormGroup) {
  calItemTotal(control: any) {
    const quantity = control.value.quantity;
    const price = control.value.price;
    control.patchValue({ total: quantity * price });
    // this.calculateTotal();
  }

  compareFn(product: Product, _product: Product) {
    return product && _product
      ? product.id === _product.id
      : product === _product;
  }

  // this puts the price for every selected product
  onSelectProduct(event: any, index: number) {
    const selectedProduct = event;
    this.items.at(index)!.get('price')!.setValue(selectedProduct.price);
  }
}

bootstrapApplication(App);

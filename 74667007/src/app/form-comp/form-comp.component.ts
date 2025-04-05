import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormArray,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-form-comp',
  templateUrl: './form-comp.component.html',
  styleUrls: ['./form-comp.component.css'],
})
export class FormCompComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      list: new FormArray([this.initListFormGroup()]),
    });
  }

  addList() {
    this.listArray.push(this.initListFormGroup());
  }

  initListFormGroup() {
    return new FormGroup({
      list_title: new FormControl('', Validators.required),
      list_items: new FormArray([ProductsComponent.addListItem()]),
    });
  }

  get listArray() {
    return this.myForm.get('list') as FormArray;
  }

  getListItemArrayFromList(i: number) {
    return (this.listArray.get(`${i}`) as FormGroup).get(
      'list_items'
    ) as FormArray;
  }

  asListItemFormGroup(listItem: AbstractControl) {
    return listItem as FormGroup;
  }

  addListItem(formGroupIndex: number) {
    this.getListItemArrayFromList(formGroupIndex).push(
      ProductsComponent.addListItem()
    );
  }

  submit() {
    console.log(this.myForm.value);
  }
}

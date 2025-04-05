import { Component, OnInit, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  productForm: FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const products = [
      { id: 1, productDesc: 'Ticket stock' },
      { id: 2, productDesc: 'Item A' },
    ];

    this.productForm = this.fb.array([]);

    for (let product of products) {
      let form = this.fb.group(product);

      this.productForm.push(form);
    }
  }

  removeProduct() {
    let desc = 'Ticket stock';

    const index = (this.productForm as FormArray).controls.findIndex(
      (control: FormGroup) => control.controls.productDesc.value == desc
      // Or
      // (control: FormGroup) => control.controls['productDesc'].value == desc
    );
    console.log(index);

    if (index > -1) this.productForm.removeAt(index);
  }
}

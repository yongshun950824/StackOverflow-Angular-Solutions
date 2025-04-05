import { Component, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [0],
      Status: ['', Validators.required],
      array: this.formBuilder.array([this.createList()]),
    });
  }

  createList(): FormGroup {
    return this.formBuilder.group({
      id: [0],
      QtyOrder: ['0', Validators.required],
      QtyDelivered: [''],
      QtyRejected: ['', Validators.required],
      QtyReceived: ['', Validators.required],
    });
  }

  get array(): FormArray {
    return this.form.get('array') as FormArray;
  }

  Calculate(i) {
    let total = this.form.get('array') as FormArray;
    let formGroup = total.controls[i] as FormGroup;

    formGroup
      .get('QtyReceived')
      .patchValue(
        formGroup.get('QtyDelivered').value - formGroup.get('QtyRejected').value
      );
  }

  add() {
    this.array.push(this.createList());
  }
}

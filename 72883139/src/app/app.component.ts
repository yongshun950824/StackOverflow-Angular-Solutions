import { Component, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  data = {
    name: 'name',
    age: 'age',
    address: [
      {
        city: 'cityA',
        street: 'streetA',
      },
      {
        city: 'cityB',
        street: 'streetB',
      },
    ],
  };

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [],
      age: [],
      address: this.fb.array([]),
    });

    this.form.patchValue(this.data);
    this.addAddress();
  }

  addAddress() {
    for (let address of this.data.address) {
      let group = this.fb.group({
        city: [],
        street: [],
      });

      group.patchValue(address);
      this.addresses.controls.push(group);
    }
  }

  get addresses(): FormArray {
    return this.form.controls.address as FormArray;
  }
}

import { Component, VERSION } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

import { formatDate } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  dynamicForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    let control: any = {
      name: 'date',
      value: new Date(2022, 11, 31),
    };

    this.dynamicForm = this.formBuilder.group({});

    var newdate = new Date();
    this.dynamicForm.addControl(
      control.name,
      this.formBuilder.control('', this.beforeDateValidator(newdate))
    );

    this.dynamicForm.controls[control.name].patchValue(
      formatDate(control.value, 'yyyy-MM-dd', 'en')
    );

    console.log(this.dynamicForm.value);
  }

  beforeDateValidator(dateValue: Date): ValidatorFn {
    console.log('im firing');

    return (control: AbstractControl): ValidationErrors | null => {
      const value: Date = control.value;

      if (!value) {
        return null;
      }

      if (dateValue === null) {
        return null;
      }

      console.log(typeof value);

      if (new Date(value) < dateValue) {
        return { beforeDateValidator: 'Invalid Date' };
      } else {
        return null;
      }
    };
  }
}

import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  form: FormGroup;
  isSubmitted: boolean = false;

  ngOnInit() {
    this.initializeFormAndItsFields();
  }

  initializeFormAndItsFields() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      visibility: new FormControl(null, {
        validators: [Validators.required],
      }),
      leadType: new FormControl(null, {
        validators: [Validators.required],
      }),
      keywords: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
    });

    console.log(this.form);
  }
}

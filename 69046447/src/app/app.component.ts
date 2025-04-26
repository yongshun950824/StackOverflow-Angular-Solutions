import { Component, VERSION } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: new FormControl('abc', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[a-zA-Z]+')
      ]),
      age: new FormControl('', [Validators.required]),
      job: new FormControl('', [Validators.required])
    });
  }

  get f() {
    return this.form.controls;
  }
}

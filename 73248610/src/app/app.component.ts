import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}

  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      password: ['', [Validators.minLength(4), Validators.maxLength(8)]],
    });
  }

  get password() {
    return this.form.controls['password'];
  }
}

import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form: FormGroup;
  loading = false;
  submitted = false;
  title = 'validator-example';

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      password: [
        '',
        [Validators.required, Validators.minLength(3), this.cannotContainSpace],
      ],
    });
  }
  cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }
  onSubmit(name: any) {
    this.submitted = true;
  }
  get f() {
    return this.form.controls;
  }
}

import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
  <div class="container">
  <div class="row">
      <div class="col">
          <h2 class="text-center fs-3 semibold">
              {{ loginForm.value | json }}
          </h2>
          <form class="needs-validation" [formGroup]="loginForm" novalidate>
              <div class="mt-4">
                  <label for="username-input" class="form-label fs-4">
                      username
                  </label>
                  <input
                      type="text"
                      id="username-input"
                      placeholder="username"
                      class="form-control mt-2"
                      formControlName="username"
                      required
                  />
                  <div
                      class="invalid-feedback"
                      *ngIf="
                          loginForm.controls['username'].hasError('required')
                      "
                  >
                      username cannot be empty
                  </div>
              </div>
              <div class="mt-4">
                  <label for="password-input" class="form-label fs-4">
                      password
                  </label>
                  <input
                      #passwordInput
                      type="password"
                      id="password-input"
                      placeholder="password"
                      class="form-control mt-2"
                      formControlName="password"
                      required
                      (input)="validatePasswordInput(passwordInput)"
                  />
                  <div
                      class="invalid-feedback"
                      *ngIf="
                          loginForm.controls['password'].hasError('required')
                      "
                  >
                      password cannot be empty
                  </div>
                  <div
                      class="invalid-feedback"
                      *ngIf="
                          loginForm.controls['password'].errors?.['passwordInvalid']
                      "
                  >
                      password cannot be less than 8 characters
                  </div>
                  <h3 class="fs-6">
                      {{ loginForm.controls["password"].errors | json }}
                  </h3>
              </div>
              <div class="mt-4">
                  <button type="submit" class="btn btn-primary col-12">
                      login
                  </button>
              </div>
          </form>
      </div>
  </div>
</div>
  `,
})
export class App {
  loginForm: FormGroup;

  constructor(private formBuilderService: FormBuilder) {
    this.loginForm = this.formBuilderService.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, validatePassword]],
      phoneNumber: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    let form = document.querySelector('form') as HTMLFormElement;
    form.addEventListener('submit', (submitEvent: SubmitEvent) => {
      if (!this.loginForm.valid || !form.checkValidity()) {
        submitEvent.preventDefault();
        submitEvent.stopPropagation();
      }

      form.classList.add('was-validated');
    });
  }

  validatePasswordInput(passwordField: HTMLInputElement) {
    if (this.loginForm.controls['password'].errors) {
      for (let error in this.loginForm.controls['password'].errors)
        passwordField.setCustomValidity(
          this.loginForm.controls['password'].errors[error]
        );
    } else {
      // No error
      passwordField.setCustomValidity('');
    }
  }
}

export function validatePassword(
  formControl: AbstractControl
): { [key: string]: any } | null {
  if (formControl.value && formControl.value.length < 8) {
    return { passwordInvalid: true };
  }
  return null;
}

bootstrapApplication(App);

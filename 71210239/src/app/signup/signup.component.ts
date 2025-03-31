import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UniqueEmail } from '../UniqueEmail';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UniqueEmail, AuthService]
})
export class SignupComponent implements OnInit {
  signupFormGroup: FormGroup;
  isSubmitted = false;
  authError = false;

  constructor(
    // private matchPassword: MatchPassword,
    private uniqueEmail: UniqueEmail,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) // private localstorageService: LocalstorageService
  {}

  ngOnInit() {
    this._initSignupForm();
  }

  private _initSignupForm() {
    this.signupFormGroup = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email],
        [this.uniqueEmail.validate],
      ],
    });
  }

  get isignupForm() {
    return this.signupFormGroup.controls;
  }

  onSubmit() {
    console.log("onSubmit")
    this.isSubmitted = true;
  }
}

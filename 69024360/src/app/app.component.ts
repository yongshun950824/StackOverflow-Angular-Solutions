import { Component, VERSION } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PasswordMatcher } from './password-matcher';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public form: FormGroup;

  passwordMatcher = new PasswordMatcher();

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        currentPassword: [
          '',
          [Validators.required],
          [this.matchCurrentPassword]
        ],
        newPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ]
        ],
        confirmPassword: ['', [Validators.required]]
      },
      { validator: this.ConfirmedValidator('newPassword', 'confirmPassword') }
    );
  }

  matchCurrentPassword = (
    control: AbstractControl
  ): Observable<ValidationErrors | null> => {
    let userId = localStorage.getItem('userId');
    return this.userService.matchCurrentPassword(userId, control.value).pipe(
      tap(x => {
        console.log('response:', x);
      }),
      map((x: any) => {
        return x.isExecute ? null : { matches: true };
      })
    );
  };

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors.confirmedValidator
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  get currentPassword() {
    return this.form.controls.currentPassword;
  }

  get newPassword() {
    return this.form.controls.newPassword;
  }

  get confirmPassword() {
    return this.form.controls.confirmPassword;
  }
}

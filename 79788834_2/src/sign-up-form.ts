import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  Signal,
  ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SignUpStore } from './state';
import { debounceTime, distinctUntilChanged, map, Observable, tap } from 'rxjs';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';

export function verificationCodeValidator(
  veriCodeIsWrongSignal: Signal<boolean>
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log('veriCodeIsWrongSignal', veriCodeIsWrongSignal());
    return veriCodeIsWrongSignal() ? { verificationCodeInvalid: true } : null;
  };
}

@Component({
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  selector: 'ilg-signup',
  templateUrl: './sign-up-form.html',
  styleUrl: './sign-up-form.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SignUpStore],
})
export class IlgSignUpForm {
  private readonly fb = inject(FormBuilder);
  private readonly validationMessages: {
    [key: string]: { [key: string]: string };
  };

  protected readonly store = inject(SignUpStore);
  veriCodeIsWrong$ = toObservable(this.store.veriCodeIsWrong);

  frm = this.fb.group({
    email: [
      '',
      [Validators.email, Validators.required],
      null,
      { updateOn: 'blur' },
    ],
    code: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        verificationCodeValidator(this.store.veriCodeIsWrong),
      ],
      null,
    ],
  });

  constructor() {
    this.validationMessages = this.initValidationMessages();

    this.frm
      .get('code')!
      .valueChanges.pipe(
        debounceTime(400),
        distinctUntilChanged(),
        takeUntilDestroyed()
      )
      .subscribe((value) => this.validateCode(value));
  }

  ngOnInit() {
    this.veriCodeIsWrong$
      .pipe(takeUntilDestroyed())
      .subscribe((_) =>
        this.frm.get('code')!.updateValueAndValidity({ emitEvent: false })
      );
  }

  get codeCrl(): AbstractControl<string | null> | null {
    return this.frm.get('code');
  }

  get emailCrl(): AbstractControl<string | null> | null {
    return this.frm.get('email');
  }

  isTouchedAndInvalid(controlName: string): boolean {
    const crl = this.frm.get(controlName);
    return !!crl && crl.touched && crl.invalid;
  }

  get canSaveForm(): boolean {
    return this.frm.touched && this.frm.valid;
  }

  emailChanged(): void {
    this.store.clearCodeVerified();
    this.codeCrl!.reset();
  }

  sendCode(): void {
    if (this.emailCrl && this.emailCrl.valid && this.emailCrl.value) {
      this.store.sendVerificationCode(this.emailCrl.value);
    }
  }

  validateCode(code: string | null): void {
    if (!code || !this.codeCrl) {
      return;
    }

    const isCodeValueValid = this.validateCodeText(this.codeCrl.value);
    if (this.emailCrl && this.emailCrl.valid && isCodeValueValid) {
      this.store.verifyCode({
        email: this.emailCrl.value!,
        code: this.codeCrl.value!,
      });
    }
  }

  private validateCodeText(code: string | null): boolean {
    if (!code) {
      return false;
    }

    const codeNum = parseInt(code, 10);
    return codeNum >= 100000 && codeNum < 10000000000;
  }

  getErrorMessage(controlName: string): string | null {
    const ctrl = this.frm.get(controlName);
    if (!ctrl) {
      return null;
    }

    if (ctrl.pristine || ctrl.valid) {
      return null;
    }

    for (const key in ctrl.errors) {
      if (Object.prototype.hasOwnProperty.call(ctrl.errors, key)) {
        return this.validationMessages[controlName][key];
      }
    }
    return null;
  }

  private initValidationMessages(): {
    [key: string]: { [key: string]: string };
  } {
    return {
      email: {
        required: `Please enter valid email`,
        email: `Email is invalid`,
      },
      code: {
        required: `Please enter code from email`,
        verificationCodeInvalid: `Invalid code`,
      },
    };
  }
}

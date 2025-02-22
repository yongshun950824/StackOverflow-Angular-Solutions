import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export const matchingPasswords: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const confirmedPassword = control.get('confirmedPassword');

  return password &&
    confirmedPassword &&
    password.value !== confirmedPassword.value
    ? { mismatch: true }
    : null;
};

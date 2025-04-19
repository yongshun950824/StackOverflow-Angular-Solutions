import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      console.log('username in validator (cannotContainSpace)', control.value);
      const valError: ValidationErrors = { cannotContainSpace: true };
      return { cannotContainSpace: true };
    }
    return null;
  }
}

import { AbstractControl, ValidationErrors } from '@angular/forms';

export class OldPwdValidators {
  static shouldBe1234(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      if (control.value !== '1234') resolve({ shouldBe1234: true });
      else resolve(null);
    });
  }

  static matchPwds(control: AbstractControl) {
    let newPwd2: AbstractControl = control.get('newPwd') as AbstractControl;
    let confirmPwd2: AbstractControl = control.get(
      'confirmPwd'
    ) as AbstractControl;
    if (newPwd2.value !== confirmPwd2.value) {
      return { pwdsDontMatch: true };
    }
    return null;
  }
}

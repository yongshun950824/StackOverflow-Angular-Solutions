import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[noSpecialCharactersOnly]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NoSpecialCharacterOnlyDirective,
      multi: true,
    },
  ],
})
export class NoSpecialCharacterOnlyDirective {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors {
    if (/^[^\w\s]+$/.exec(control.value)) {
      return { specialCharactersOnly: true };
    }

    return null;
  }
}

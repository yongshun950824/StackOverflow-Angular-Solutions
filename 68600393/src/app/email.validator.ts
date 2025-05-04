import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

export class EmailValidator {
  static createValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return of({}).pipe(
        delay(1000),
        map(() => {
          const isMatch = /[A-Za-z0-9]{6,}@gmail.com/.test(control.value);
          return isMatch ? null : { invalidEmail: true };
        })
      );
    };
  }
}

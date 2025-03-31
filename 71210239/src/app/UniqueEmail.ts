import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator } from '@angular/forms';
import { catchError, map, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class UniqueEmail implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (control: AbstractControl) => {
    const { value } = control;

    return this.authService.emailAvailable(value).pipe(
      map((value) => {
        console.log("map");
        console.log(value);
        if (value.available) {
          return null;
        }
      }),
      catchError((err) => {
        console.log("catchError");
        console.log(err);
        if (err.error.email) {
          return of({ EmailInUse: true });
        } else {
          return of({ noConnection: true });
        }
      })
    );
  };
}

import { Component, VERSION } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sampleform: FormGroup;

  ngOnInit() {
    this.sampleform = new FormGroup({
      numValue: new FormControl('', [
        Validators.pattern('^[0-9]*$'),
        //Validators.min(3),
        //Validators.max(10),
        this.defaultValueOrRangeValidator(
          0,
          Validators.min(3),
          Validators.max(10)
        ),
      ]),
    });

    this.sampleform.patchValue({
      numValue: 0,
    });
  }

  onSendHandler() {}

  defaultValueOrRangeValidator(
    defaultValue: number,
    ...rangeValidators: ValidatorFn[]
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value == defaultValue) return null;

      for (let validator of rangeValidators) {
        if (validator(control)) return validator(control);
      }
    };
  }
}

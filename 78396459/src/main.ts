import { Component, DestroyRef, inject, Signal } from '@angular/core';
import { CommonModule, DatePipe, JsonPipe } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroupDirective,
  FormGroup,
  NgForm,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatSuffix,
} from '@angular/material/form-field';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import { MatInput } from '@angular/material/input';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import {
  DateAdapter,
  ErrorStateMatcher,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import 'zone.js';
import { Subscription } from 'rxjs';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

type FormGetters = {
  startDate: FormControl<string>;
  endDate: FormControl<string>;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatDatepickerInput,
    MatInput,
    MatError,
    MatDatepicker,
    MatDatepickerToggle,
    MatHint,
    MatSuffix,
    MatOption,
    MatSelect,
    JsonPipe,
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
  templateUrl: `main.html`,
})
export class App {
  private formBuilder = inject(FormBuilder);

  name = 'Angular';

  /* data properties */
  datesArray = [1, 2, 3];

  /* form properties */
  protected datesInfo: FormGroup = this.formBuilder.group({});
  protected formGetters: FormGetters[] = [];

  /* error state matchers */
  readonly startDateAfterEndDateMatchers: SingleErrorStateMatcher[] = [];

  /* lifecycle hooks */
  protected ngOnInit(): void {
    // initialisation
    this.initFormGroup();
    this.formGetters = this.initFormGetters(this.datesInfo);

    // create error state matchers
    for (let i = 0; i < this.datesArray.length; i++) {
      this.startDateAfterEndDateMatchers.push(
        new SingleErrorStateMatcher(
          'startDateAfterEndDate',
          this.datesInfo.controls['datesArray'].get(`${i}`) as FormGroup
        )
      );
    }
  }

  // INITIALISE FORM
  private initFormGroup() {
    this.datesInfo = this.formBuilder.group({
      datesArray: this.formBuilder.array(
        (this.datesArray || []).map((_) =>
          this.formBuilder.group(
            {
              startDate: [
                '',
                {
                  nonNullable: true,
                  validators: [Validators.required],
                },
              ],
              endDate: [
                '',
                {
                  validators: [],
                },
              ],
            },
            { validators: [this.startDateAfterEndDateMatcher] }
          )
        )
      ),
    });
  }

  // FORM GETTER
  private initFormGetters(form: FormGroup) {
    const datesArray = this.datesInfo.get('datesArray') as FormArray;
    const formGetters: FormGetters[] = [];

    datesArray.controls.forEach((control: AbstractControl) => {
      if (control instanceof FormGroup) {
        const formGetter: FormGetters = {
          startDate: control.get('startDate') as FormControl<string>,
          endDate: control.get('endDate') as FormControl<string>,
        };

        formGetters.push(formGetter);
      }
    });

    return formGetters;
  }

  // VALIDATORS
  public startDateAfterEndDateMatcher: ValidatorFn =
    this.dateComparisonValidator(
      'startDate',
      'endDate',
      'startDateAfterEndDate',
      (date1: Date, date2: Date) => date1 && date2 && date1 > date2
    );

  private dateComparisonValidator(
    fieldName1: string,
    fieldName2: string,
    errorName: string,
    condition: (value1: any, value2: any) => boolean
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const field1Value = control.get(fieldName1)?.value;
      const field2Value = control.get(fieldName2)?.value;
      console.log('condition', condition(field1Value, field2Value));
      if (condition(field1Value, field2Value)) {
        const errors: ValidationErrors = {};
        errors[errorName] = true;
        return errors;
      }
      return null;
    };
  }
}

// ERROR MATCHER
export class SingleErrorStateMatcher implements ErrorStateMatcher {
  private errorCode: string;
  public constructor(errorCode: string, private formGroup?: FormGroup) {
    this.errorCode = errorCode;
  }

  isErrorState(
    control: FormControl | null,
    formGroup: FormGroupDirective | NgForm | null
  ): boolean {
    let parentFormGroup = this.formGroup ?? formGroup;
    //console.log('parentFormGroup', parentFormGroup);

    return (
      !!(parentFormGroup?.dirty || parentFormGroup?.touched) &&
      !!(parentFormGroup?.invalid && parentFormGroup?.hasError(this.errorCode))
    );
  }
}

bootstrapApplication(App, {
  providers: [provideAnimations()],
});

import {
  Component,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NgControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ref-urlcheck',
  templateUrl: './ref-urlcheck.component.html',
  styleUrls: ['./ref-urlcheck.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RefURLcheckComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: RefURLcheckComponent,
    },
  ],
})
export class RefURLcheckComponent
  implements OnInit, ControlValueAccessor, MatFormFieldControl<any>, Validator
{
  @Input() maxLen = 254;
  strUrl: string;

  onChange = (changedUrl) => {};
  onTouched = () => {};
  isDisabled = false;
  touched = false;

  @HostListener('focusin', ['$event.target.value']) onFocusIn;
  @ViewChild('inUrl', { static: true }) inUrl: NgControl;

  constructor() {}

  onContainerClick(event: MouseEvent): void {
    throw new Error('Method not implemented.');
  }
  setDescribedByIds(ids: string[]): void {
    throw new Error('Method not implemented.');
  }
  userAriaDescribedBy?: string;
  autofilled?: boolean;
  controlType?: string;
  errorState: boolean;
  disabled: boolean;
  required: boolean;
  shouldLabelFloat: boolean;
  empty: boolean;
  focused: boolean;
  ngControl: NgControl;
  placeholder: string;
  id: string;
  stateChanges: Observable<void>;
  value: any;
  matcher: ErrorStateMatcher;

  ngOnInit(): void {}

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  registerOnTouched(onTouched: () => {}): void {
    this.onTouched = onTouched;
  }
  registerOnChange(onChange: (changedValue: string) => {}): void {
    this.onChange = onChange;

    this.onFocusIn = (inputVal) => {
      console.log('focus in', inputVal);
      this.markAsTouched();
    };
  }

  writeValue(value: string): void {
    this.strUrl = value;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  changeInput(inVal: string) {
    this.onChange(inVal);
    this.markAsTouched();
  }

  readonly errorStateMatcher: ErrorStateMatcher = {
    isErrorState: (ctrl: FormControl) => {
      console.log('errorStateMatch...');
      this.errorState = true;
      return ctrl && ctrl.invalid;
    },
  };

  validate(control: AbstractControl): ValidationErrors | null {
    if (control?.value?.length <= 5) {
      this.errorState = true;
      this.inUrl.control.setErrors({ tooShort: true });
      return {
        tooShort: true,
      };
    }

    this.errorState = false;
    return null;
  }
}

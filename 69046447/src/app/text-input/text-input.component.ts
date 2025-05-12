import { Component, ElementRef, Input, OnInit, Self, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl, NgModel } from '@angular/forms';



@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit,  ControlValueAccessor {


  @ViewChild('input', { static: true }) input!: NgModel;
  @Input() type = "text";
  @Input() label!: string;

  value: any;
  class: any;
  disabled:boolean = false;

  constructor(private elementRef: ElementRef, @Self() public controlDir: NgControl) {
    if (controlDir)
      controlDir.valueAccessor = this;
  }

  ngOnInit(): void {
    let control = this.controlDir.control;

    // control.validator return ValidatorFn
    if (control) {
      console.log('control.validator: ', control?.validator);
      //console.log('control.validator(control): ', control?.validator(control));
    }

    const validator = control && control.validator 
      ? [control.validator]
      : [];
    const asyncValidator = control && control.asyncValidator
      ? [control.asyncValidator] 
      : [];
    
      this.input.control?.setValidators(validator);
      this.input.control?.setAsyncValidators(asyncValidator);
      this.input.control?.updateValueAndValidity();
  }

  writeValue(obj: any): void {
    this.value = obj;
    //this.input.nativeElement = obj || '';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;  
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onChange = (event: any) => {}
  onTouched = () => {}

  get control(): AbstractControl | null {
    return this.input.control;
  }
}
import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textbox',
  template: `
    <input [(ngModel)]="value" [disabled]="disabled" />
  `,
  styleUrls: ['./textbox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextboxComponent),
      multi: true
    }
  ]
})
export class TextboxComponent implements OnInit, ControlValueAccessor {
  constructor() {}
  writeValue(obj: any): void {
    if (obj !== this.value) {
      this._value = obj;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  disabled = false;

  onChange: () => {};
  onTouch: () => {};

  private _value: string;
  public get value(): string {
    return this._value;
  }
  public set value(value: string) {
    this._value = value;
  }

  ngOnInit(): void {}
}

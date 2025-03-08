import { Component, OnInit, forwardRef, OnDestroy, AfterViewInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  ControlValueAccessor,
} from '@angular/forms';

import { Subscription } from 'rxjs';

export interface Login {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LoginFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LoginFormComponent),
      multi: true,
    },
  ],
})
export class LoginFormComponent
  implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy
{
  public form: FormGroup;
  public subscriptions: Subscription[] = [];

  public hide = true;

  public onChange: any = () => {};
  public onTouched: any = () => {};

  constructor(private fb: FormBuilder) {}

  public get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  public get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  public get value(): Login {
    return this.form.value;
  }

  public set value(value: Login) {
    console.log(value)
    this.form.setValue(value, { emitEvent: false });
    this.onChange(value);
    this.onTouched();
  }

  public registerOnChange(fn) {
    this.onChange = fn;
  }

  public writeValue(value: any) {
    //console.log(value)
    if (value) {
      this.value = value;
    }
  }

  public registerOnTouched(fn) {
    this.onTouched = fn;
  }

  public validate(_: FormControl) {
    return this.form.valid ? null : { login: { valid: false } };
    // return null;
  }

  public ngOnInit() {
    this.createFormInstance();

    this.subscriptions.push(
      this.form.valueChanges.subscribe((value) => {
        this.onChange(value);
        this.onTouched();
      })
    );

    
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.form.updateValueAndValidity();
    })
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  private createFormInstance() {
    this.form = this.fb.group({
      username: ['test', [Validators.required]],
      password: ['test', [Validators.required]],
    });
  }
}

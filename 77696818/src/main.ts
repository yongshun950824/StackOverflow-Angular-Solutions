import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <form [formGroup]="form">
        <input matInput type="number" formControlName="minute_glow_periodic" value="4" min="0" max="60">
    </form>
  `,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class App {
  name = 'Angular';

  constructor(private formBuilder: FormBuilder) {}

  data: any = {};

  form = this.formBuilder.group({
    minute_glow_periodic: new UntypedFormControl({
      value: this.data.element?.minute_glow_periodic ?? 4,
      disabled: false,
    }),
  });

  ngOnInit() {
    if (
      !this.minuteGlowPeriodic!.value /*&& this.minuteGlowPeriodic!.value != 0*/
    )
      this.minuteGlowPeriodic!.patchValue(4);
  }

  get minuteGlowPeriodic() {
    return this.form.get('minute_glow_periodic');
  }
}

bootstrapApplication(App);

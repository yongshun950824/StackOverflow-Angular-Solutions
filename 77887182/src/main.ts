import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import 'zone.js';

import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class App {
  name = 'Angular';

  reactiveForm = new FormGroup({
    lineOfBusiness: new FormControl(),
    psv: new FormControl(),
  });

  private destroy$ = new Subject();

  @ViewChild('psvSelect') psvSelect!: MatSelect;

  ngOnInit() {}

  ngAfterViewInit() {
    this.reactiveForm.controls.lineOfBusiness.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        this.disableOption(value);
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  disableOption(optionValue: string): void {
    console.log('Disabling ' + optionValue);

    if (optionValue === 'commercial')
      this.psvSelect.options.find((x) => x.value == 'radar')!.disabled = true;
    else
      this.psvSelect.options.find((x) => x.value == 'radar')!.disabled = false;
  }
}

bootstrapApplication(App, {
  providers: [provideAnimations()],
});

import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TextService, Text } from './text.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [TextService],
  template: `
  <form [formGroup]="form" (ngSubmit)="onSubmit()">
  <div>
      <label>
          Title
      </label>
  </div>
  <div>
      <input type="text" formControlName="title">
      <div *ngIf="form.controls.title.errors?.titleAlreadyExists">
          Title already exists
      </div>
  </div>

  <div>
      <label>
          Subtitle
      </label>
  </div>
  <div>
      <input type="text" formControlName="subtitle">
  </div>

  <div>
      <label>
          Content
      </label>
  </div>
  <div>
      <input type="text" formControlName="content">
  </div>

  <p>
      <button type="submit" [disabled]="!form.valid">Sauvegarder le texte</button>
  </p>
</form>
  `,
})
export class App {
  text: Text = new Text();
  form: any;

  constructor(private _ts: TextService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [
        '',
        {
          validators: Validators.required,
          asyncValidators: this.alreadyExistingTitle(this._ts),
        },
      ],
      subtitle: [''],
      content: [''],
    });
  }

  alreadyExistingTitle(ts: TextService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return ts
        .checkIfTitleExists(control.value)
        .pipe(
          map((result: boolean) =>
            result ? { titleAlreadyExists: true } : null
          )
        );
    };
  }

  onSubmit() {
    this.text = Object.assign(this.text, this.form.value);
    this._ts.save(this.text).subscribe();
  }
}

bootstrapApplication(App);

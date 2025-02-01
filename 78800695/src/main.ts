import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { throwError } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div *ngFor="let errorMessage of errorMessages">
      {{ errorMessage }}
    </div>

    <br />
    <div [ngClass]="{'show': hasError('firstName'), 'hide': !hasError('firstName')}">
      <span>FirstName error</span>
        <div *ngFor="let errorMessage of getErrorsByField('firstName')">
        {{ errorMessage }}
      </div>
    </div>

    <div [ngClass]="{'show': hasError('lastName'), 'hide': !hasError('lastName')}">
      <span>LastName error</span>
        <div *ngFor="let errorMessage of getErrorsByField('lastName')">
        {{ errorMessage }}
      </div>
    </div>
  `,
  imports: [CommonModule],
  styles: [
    `
      .show {
        display: block;
      }

      .hide {
        display: none;
      }
    `,
  ],
})
export class App {
  name = 'Angular';

  errorMessages: string[] = [];

  ngOnInit() {
    throwError({
      status: 'failed',
      error: {
        message:
          'Invalid request data. Please review the request and try again.',
        code: [
          {
            message: 'firstName is required',
            code: 'any.required',
          },
        ],
      },
    }).subscribe({
      next: (res: any) => {
        // this.registration = res.data || {} as StudentRegistration;
        // this.opd.registration = res.data._id;
        // this.createOpdStudent()
      },
      error: (err) => {
        console.log(err);

        let errorResponse = err.error;
        this.errorMessages = errorResponse.code.map((x: any) => x.message);
      },
    });
  }

  hasError(fieldName: string) {
    return this.errorMessages.some((x) => x.indexOf(fieldName) > -1);
  }

  getErrorsByField(fieldName: string) {
    return this.errorMessages.filter((x) => x.indexOf(fieldName) > -1);
  }
}

bootstrapApplication(App);

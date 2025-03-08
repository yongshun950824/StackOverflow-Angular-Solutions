import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [TestService],
  template: `
    <button (click)="onSubmit()">Submit</button>

    <div *ngIf="hasError">
      <div *ngFor="let err of errors">
        {{ err.field }} : {{ err.error }}
      </div>
    </div>
  `,
})
export class App {
  name = 'Angular';

  hasError = false;
  errors: any[] = [];

  constructor(private service: TestService) {}

  onSubmit() {
    let body = {};
    this.service.submit(body).subscribe({
      next: (response) => {
        // Success
      },
      error: (err) => {
        if (err.status == 400) {
          this.hasError = true;

          this.errors = err.response;
          // Use err.response to display in toast
        }
      },
    });
  }
}

bootstrapApplication(App);

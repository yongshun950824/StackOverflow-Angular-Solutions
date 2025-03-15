import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  catchError,
  iif,
  mergeMap,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';

  signupOb$ = of({ email: 'abc@gmail.com' });
  signupFailedOb$ = throwError(() => ({
    error: 'Error sign in',
  }));
  emailVerificationOb$ = of({ message: 'Success' });

  ngOnInit() {
    // Uncomment below line and comment Line 39 for success scenario
    //this.signupOb$
    // Uncomment below line and comment Line 37 for failure scenario
    this.signupFailedOb$
      .pipe(
        switchMap((response: any) => this.emailVerificationOb$)
        //tap((x) => console.log(x))
      )
      .subscribe({
        next: (notificationResponse: any) => {
          console.log('Success', notificationResponse.message);
        },
        error: (err) => console.error('Error', err),
      });
  }
}

bootstrapApplication(App);

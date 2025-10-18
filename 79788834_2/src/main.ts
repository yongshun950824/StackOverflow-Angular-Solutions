import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { IlgSignUpForm } from './sign-up-form';

@Component({
  imports: [IlgSignUpForm],
  selector: 'app-root',
  template: `
  <div class="main-content">
    <main>
      <ilg-signup/>
    </main>
  </div>
  `,
})
export class App {}

bootstrapApplication(App);

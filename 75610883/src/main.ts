import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormControl, Validators } from '@angular/forms';

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

  usernameNullable = new FormControl('', {
    validators: [Validators.required],
  });

  username = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });
  password = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  ngOnInit() {
    this.usernameNullable.value; // Hover the value
    this.username.value; // Hover the value
  }
}

bootstrapApplication(App);

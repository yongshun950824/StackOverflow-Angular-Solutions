import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <h1>Login</h1>
    <button [routerLink]="['/home']">Login</button>
  `,
  imports: [RouterLink],
})
export class LoginComponent {}

import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <h1>Login</h1>
    
    <a [routerLink]="['/claims-summary', '1']">Claim Summary</a>`,
  imports: [RouterLink],
})
export class LoginComponent {
  name = 'Angular';
}

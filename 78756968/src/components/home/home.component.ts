import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `<h1>Home</h1>
  `,
  imports: [RouterModule],
})
export class HomeComponent {}

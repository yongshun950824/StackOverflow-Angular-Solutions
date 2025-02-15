import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import 'zone.js';
import { AppRoutingModule } from './app.routing';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <router-outlet></router-outlet>
  `,
  imports: [RouterModule],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [importProvidersFrom(AppRoutingModule)],
});

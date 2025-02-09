import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `


    <router-outlet></router-outlet>

    <router-outlet name="outlet1"></router-outlet>
  `,
  imports: [RouterModule],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [importProvidersFrom(AppRoutingModule)],
});

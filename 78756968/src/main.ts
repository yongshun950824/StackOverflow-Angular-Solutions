import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppRoutingModule } from './app-routing.module';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `

  <a [routerLink]="['w']">Workspace</a>
  <router-outlet></router-outlet>

  `,
  imports: [RouterModule, RouterLink],
})
export class App {
  name = 'Angular';

  constructor(private router: Router) {}
}

bootstrapApplication(App, {
  providers: [importProvidersFrom(AppRoutingModule)],
});

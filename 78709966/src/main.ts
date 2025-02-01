import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppRoutingModule } from './app-routing.module';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `

  <button (click)="navigateToContact()">Open contact</button>
  <router-outlet></router-outlet>
  <div class="modal-outlet">
    <router-outlet name="modal"></router-outlet>
  </div>
  `,
  imports: [RouterModule],
})
export class App {
  name = 'Angular';

  constructor(private router: Router) {}

  public navigateToContact(): void {
    this.router.navigate(['contact']);
  }
}

bootstrapApplication(App, {
  providers: [importProvidersFrom(AppRoutingModule)],
});

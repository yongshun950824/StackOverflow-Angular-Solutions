import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CreatedDateTransactionsComponent } from './created-date-transactions.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  template: `
    <app-created-date-transactions></app-created-date-transactions>
  `,
  imports: [CreatedDateTransactionsComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    provideAnimations(),
    provideToastr(), // Toastr providers
  ],
});

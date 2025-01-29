import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './app/home/home.page';
import { IonApp } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  template: `
  <ion-app>
    <ng-container>
      <app-home></app-home>
    </ng-container>
  </ion-app>
  `,
  imports: [HomePage, IonApp],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    importProvidersFrom([IonicModule.forRoot({ mode: 'ios' })]),
    // For adding Injection token to root application
    /*
    { provide: 'nombre', useValue: 'test' },
    { provide: 'radio', useValue: 1 },
    */
  ],
});

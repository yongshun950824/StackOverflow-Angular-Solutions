import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TestFormComponent } from './test-form.component';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import 'zone.js';
import {
  provideIonicAngular,
  IonicRouteStrategy,
  IonApp,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';

//import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Call the element loader before the bootstrapModule/bootstrapApplication call
//defineCustomElements(window);

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <ion-app>
    <ion-content class="ion-padding">
      <app-test-form (formDataSubmitted)="formSubmitted($event)"></app-test-form>
    </ion-content>
  </ion-app>
  `,
  imports: [IonApp, IonContent, IonItem, IonLabel, IonList, TestFormComponent],
})
export class App {
  name = 'Angular';

  formSubmitted(form: any) {}
}

bootstrapApplication(App, {
  providers: [
    //{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({ mode: 'ios' }),
  ],
});

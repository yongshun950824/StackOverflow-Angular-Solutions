import 'zone.js/dist/zone';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  bootstrapApplication,
  BrowserModule,
  platformBrowser,
} from '@angular/platform-browser';
import { BirdCreateFormComponent } from './create-form/create-form.component';

@Component({
  selector: 'my-app',
  template: `
    <create-form></create-form>
  `,
})
export class App {
  name = 'Angular';
}

@NgModule({
  declarations: [App, BirdCreateFormComponent],
  imports: [BrowserModule],
  bootstrap: [App],
})
export class AppModule {}

platformBrowser()
  .bootstrapModule(AppModule)
  .catch((e) => console.error(e));

import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { environment, RegionNames, region_phrases } from './environment';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <span class="visually-hidden">{{ region_phrases[environment.region_id].string1 }}</span>
  `,
})
export class App {
  name = 'Angular';

  //regionNames = RegionNames
  environment = environment;
  region_phrases = region_phrases;
}

bootstrapApplication(App);

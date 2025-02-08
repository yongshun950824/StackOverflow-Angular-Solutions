import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ConfigService } from './config.service';
import { appConfig } from './app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    console.log(
      'App Component getConfigUrl(test): ',
      this.configService.getConfigUrl('test')
    );
  }
}

bootstrapApplication(App, appConfig);

import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { urlService } from './url.service';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';

  id = '1';

  constructor(private urlService: urlService) {}

  ngOnInit() {
    this.urlService.getUrl(this.id).subscribe((url) => console.log(url));
  }
}

bootstrapApplication(App, {
  providers: [provideHttpClient()],
});

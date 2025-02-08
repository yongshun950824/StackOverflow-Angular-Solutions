import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { DataService } from './data.service';
import { provideHttpClient } from '@angular/common/http';

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
  jsonFormData!: any;

  constructor(private dataSvc: DataService) {}

  ngOnInit() {
    this.dataSvc.getJsonFormData().subscribe((formData: any) => {
      this.jsonFormData = formData;
      console.log('const', this.jsonFormData);
    });
  }
}

bootstrapApplication(App, {
  providers: [provideHttpClient()]
});

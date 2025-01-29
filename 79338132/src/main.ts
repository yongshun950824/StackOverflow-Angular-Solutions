import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ChartsComponent } from './charts.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
@Component({
  selector: 'app-root',
  template: `
    <app-charts></app-charts>
  `,
  imports: [ChartsComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideCharts(withDefaultRegisterables())],
});

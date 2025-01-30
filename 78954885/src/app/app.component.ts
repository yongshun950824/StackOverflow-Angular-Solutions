import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
    <router-outlet name="dialog"></router-outlet>
  `,
})
export class AppComponent {
  constructor() {}
}

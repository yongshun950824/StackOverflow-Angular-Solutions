import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ControlhoverDirective } from './controlhover.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <button class="btn-submit" type="button" appControlhover [defaultColor]="btnBackgroundColor" [highlightColor]="btnhoverColor" [btnhovertxtcolor]="btnhovertxtcolor"   style="margin-top: 20px"                            
      (click)="Submit()">      Send    </button>
  `,
  imports: [ControlhoverDirective],
})
export class App {
  name = 'Angular';

  btnBackgroundColor = '#28e979';

  btnhoverColor = '#a6dabb';
  //btnhoverColor = 'none';
  btnhovertxtcolor = '#848f90';
  btnColor = 'black';

  Submit() {}
}

bootstrapApplication(App);

import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  people = [
    { name: 'Person 2' },
    { name: 'Person 3' },
    { name: 'Person 1' },
    { name: 'Person 4' },
  ];
}

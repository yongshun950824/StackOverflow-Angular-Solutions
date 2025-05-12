import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  array: any[] = [
    {
      id: 1,
      name: 'Gamma'
    },
    {
      id: 2,
      name: 'Alpha'
    },
    {
      id: 3,
      name: 'Beta'
    }
  ];
}

import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  exampleObject: any = {
    innerObject: null,
  };

  arrays: any[] = [
    {
      id: 1,
      location: "Location 1"
    },
    {
      id: 2,
      location: "Location 2"
    },
    {
      id: 3,
      location: "Location 3"
    },
  ];
}

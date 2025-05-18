import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  standalone: false,
})
export class AppComponent {
  months = [
    {
      id: 1,
      name: 'Jan',
    },
    {
      id: 2,
      name: 'Feb',
    },
    {
      id: 3,
      name: 'Mar',
    },
  ];
}

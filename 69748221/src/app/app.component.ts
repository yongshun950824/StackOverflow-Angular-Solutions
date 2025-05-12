import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  divitionArr: any[] = [
    {
      first_name: 'Leo',
      last_name: 'Messi',
      divition: '1',
    },
    {
      first_name: 'Thomas',
      last_name: 'Partey',
      divition: '12',
    },
    {
      first_name: 'Lando',
      last_name: 'Norris',
      divition: '3',
    },
  ];
  project: any = {};

  ngOnInit() {
    this.divitionArr = this.divitionArr.map((divition: any) => {
      return {
        ...divition,
        displayLabel: divition.first_name + ' ' + divition.last_name,
      };
    });
  }
}

import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  users: any[] = [
    { firstName: 'Abu', lastName: 'Bakar' },
    { firstName: 'Leo', lastName: 'Messo' },
    { firstName: 'Charles', lastName: 'Leclec' },
  ];

  selRows: number[] = [];

  toggleSelectedRows(i: number) {
    let index = this.selRows.findIndex((x) => x == i);

    if (index == -1) this.selRows.push(i);
    else this.selRows.splice(index, 1);
  }

  isSelectedRow(i: number) {
    return this.selRows.findIndex((x) => x == i) > -1;
  }
}

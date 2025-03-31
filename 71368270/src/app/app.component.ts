import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  member = [
    { id: 1, name: 'shinta' },
    { id: 2, name: 'rahma' },
    { id: 3, name: 'john' },
  ];

  nest = [
    { id: 1, amount: 2000, userid: 1 },
    { id: 2, amount: 3000, userid: 2 },
    { id: 3, amount: 5000, userid: 2 },
    { id: 4, amount: 1500, userid: 1 },
    { id: 5, amount: 2200, userid: 1 },
    { id: 6, amount: 12500, userid: 1 },
    { id: 7, amount: 7000, userid: 2 },
    { id: 8, amount: 8300, userid: 3 },
    { id: 9, amount: 2800, userid: 3 },
    { id: 10, amount: 9500, userid: 3 },
  ];

  memberData: any[] = [];

  ngOnInit() {
    this.memberData = this.member.map((x) => ({
      ...x,
      totalAmount: this.nest
        .filter((y) => y.userid == x.id)
        .reduce((total: number, current) => (total += current.amount), 0),
    }));
  }
}

import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  events: any[] = [
    {
      pk: 33,
      name: 'EVENT 634',
      start_date: '2022-05-11T00:00:00',
      end_date: '2022-05-14T00:00:00',
    },
    {
      pk: 32,
      name: 'Event AAB',
      start_date: '2022-06-02T00:00:00',
      end_date: '2022-06-04T00:00:00',
    },
    {
      pk: 26,
      name: 'Event LKS',
      start_date: '2022-06-02T00:00:00',
      end_date: '2022-06-12T00:00:00',
    },
  ];
  eventsByMonth: any[] = [];

  ngOnInit() {
    let monthGroup = this.events.reduce(function (r, o) {
      let year = o.start_date.split('-')[0];
      let month = o.start_date.split('-')[1];

      let groupedDate = new Date(year, month, 1);
      let groupedDateString = `${groupedDate.getFullYear()}-${groupedDate.getMonth()}-${groupedDate.getDate()}`;

      r[groupedDateString]
        ? r[groupedDateString].events.push(o)
        : (r[groupedDateString] = { date: groupedDate, events: [o] });
      return r;
    }, {});

    this.eventsByMonth = Object.keys(monthGroup).map(function (k) {
      return monthGroup[k];
    });

    console.log(this.eventsByMonth);
  }
}

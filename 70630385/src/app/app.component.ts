import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    console.log('Solution 1');
    this.sunday();
    console.log('Solution 2');
    this.sunday2();
  }

  sunday() {
    let dt = new Date('2021-01-01');
    let dt2 = new Date('2021-01-08');

    // SOLUTION 1
    let dayobj = {
      day1: dt.getDay(),
      day2: dt2.getDay(),
    };

    for (const key in dayobj) {
      console.log(key);
      console.log((dayobj as any)[key]);
      if ((dayobj as any)[key] == 0) {
        //some logic here
      }
    }
  }

  sunday2() {
    let dt = new Date('2021-01-01');
    let dt2 = new Date('2021-01-08');

    let dayobj: { [key: string]: number } = {
      day1: dt.getDay(),
      day2: dt2.getDay(),
    };

    for (const key in dayobj) {
      console.log(key);
      console.log(dayobj[key]);
      if (dayobj[key] == 0) {
        //some logic here
      }
    }
  }
}

import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TitlePipe } from './title.pipe';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, TitlePipe],
  template: `
  <ul>
    <li *ngFor="let d of data">
      <!-- Solution 1 -->
      {{ d.sex == 'Male' ? 'Mr.' : d.sex == 'Female' ? 'Mrs.' : '' }} {{ d.firstname }} {{d.lastname}}

      <!-- Solution 2 -->
      <!--{{ d.title }} {{ d.firstname }} {{d.lastname}}-->

      <!-- Solution 3 -->
      <!--{{ d.sex | title }} {{ d.firstname }} {{d.lastname}}-->
    </li>
  </ul>
  `,
})
export class App {
  data: any[] = [
    { id: '1', firstname: 'Test', lastname: 'Test2', sex: 'Female' },
    { id: '2', firstname: 'fname', lastname: 'lname', sex: 'Male' },
    { id: '3', firstname: 'Rajesh', lastname: 'Singh', sex: 'Male' },
    { id: '4', firstname: 'Sim', lastname: 'Sen', sex: 'Female' },
  ];

  ngOnInit() {
    this.data = this.data.map((x) => ({
      ...x,
      title: x.sex == 'Male' ? 'Mr.' : x.sex == 'Female' ? 'Mrs.' : '',
    }));
  }
}

bootstrapApplication(App);

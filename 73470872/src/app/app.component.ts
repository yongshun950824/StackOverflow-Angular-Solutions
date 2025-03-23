import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  list: any[] = [
    {
      name: 'Item 1',
      status: '1',
    },
    {
      name: 'Item 2',
      status: '2',
    },
    {
      name: 'Item 1',
      status: '1',
    },
    {
      name: 'Item 3',
      status: '3',
    },
  ];

  // Solution 2
  list2: any[];

  ngOnInit() {
    this.list2 = this.list.filter((x) => x.status == '1');
  }
}

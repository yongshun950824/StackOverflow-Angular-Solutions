import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  sampleList = [
    {
      parent: 'Sample 1',
      children: [
        {
          product: 'Product 1',
          name: 'Test Product 1',
        },
      ],
    },
    {
      parent: 'Sample 1',
      children: [
        {
          product: 'Product 2',
          name: 'Test Product 2',
        },
      ],
    },
    {
      parent: 'Sample 2',
      children: [
        {
          product: 'Product 1',
          name: 'Test Product 1',
        },
      ],
    },
  ];

  groupedSampleList: any[] = [];

  ngOnInit() {
    let grouped = this.sampleList.reduce((groups, current) => {
      groups[current.parent] = groups[current.parent] || [];
      groups[current.parent].push(...current.children);
      return groups;
    }, Object.create(null));

    this.groupedSampleList = Object.keys(grouped).map((key) => ({
      parent: key,
      children: grouped[key],
    }));

    // Or es2017
    /*
    this.groupedSampleList = Object.entries(grouped).map((value) => ({
      parent: value[0],
      children: value[1],
    }));
    */

    console.log(this.groupedSampleList);
  }
}

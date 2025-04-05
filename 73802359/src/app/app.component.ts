import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  jsonData = {
    Parent1: [
      {
        Data1: ['child1', 'child2'],
      },
    ],
    Parent2: [
      {
        Data2: ['child3', 'child4'],
      },
    ],
  };

  formattedJsonData = {};

  ngOnInit() {
    this.formattedJsonData = Object.keys(this.jsonData).reduce((acc, cur) => {
      acc[cur] = [];

      for (let item of this.jsonData[cur]) {
        for (let prop in item) {
          for (let value of item[prop]) acc[cur].push(value);
        }
      }

      return acc;
    }, {});

    console.log(this.formattedJsonData);
  }
}

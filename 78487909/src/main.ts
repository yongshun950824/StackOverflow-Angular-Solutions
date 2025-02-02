import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [JsonPipe, NgTemplateOutlet],
})
export class App {
  name = 'Angular';

  data: any[] = [
    {
      //,
      name: 'Group A',
      children: [{}],
      subGroups: [
        {
          //...,
          name: 'Group A.1',
          children: [
            {
              //...
            },
          ],
          subGroups: [
            {
              //...,
              name: 'Group A.1.1',
            },
          ],
        },
      ],
    },
  ];
}

bootstrapApplication(App);

import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  data: any = {
    response: [
      {
        title: 'United vd Chelsea',
        videos: [
          {
            title: 'Highlights',
            embed: '<div>Full highlight video is embed here</div>',
          },
          {
            title: 'goal 1',
            embed: '<div>goal is embed here</div>',
          },
          {
            title: 'goal 2',
            embed: '<div>goal is embed here</div>',
          },
        ],
      },
      {
        title: 'Arsenal vs Lfc',
        videos: [
          {
            title: 'Highlights',
            embed: '<div>Full highlight video is embed here</div>',
          },
          {
            title: 'goal 1',
            embed: '<div>goal is embed here</div>',
          },
          {
            title: 'goal 2',
            embed: '<div>goal is embed here</div>',
          },
        ],
      },
    ],
  };
}

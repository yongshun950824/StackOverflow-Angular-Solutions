import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  live = [];
  // live = [
  //   {
  //     fixture: {
  //       status: {
  //         elapsed: 'Elapsed',
  //       },
  //     },
  //     teams: {
  //       home: {
  //         logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Brazilian_Football_Confederation_logo.svg/1200px-Brazilian_Football_Confederation_logo.svg.png',
  //         name: 'Brazil',
  //       },
  //       away: {
  //         logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/England_national_football_team_crest.svg/1200px-England_national_football_team_crest.svg.png',
  //         name: 'England',
  //       },
  //     },
  //     goals: {
  //       home: 3,
  //       away: 1,
  //     },
  //   },
  // ];
}

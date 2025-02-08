import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [NgForOf],
})
export class App {
  name = 'Angular';

  input: any[] = [
    {
      group: 'A',
      teams: [
        { id: 1, name: 'France' },
        { id: 2, name: 'Portugual' },
      ],
    },
    {
      group: 'B',
      teams: [
        { id: 3, name: 'China' },
        { id: 4, name: 'US' },
      ],
    },
    {
      group: 'C',
      teams: [
        { id: 3, name: 'Italy' },
        { id: 4, name: 'AUS' },
      ],
    },
  ];
  props!: string[];

  output!: any[];

  ngOnInit() {
    this.props = this.input.map((x: any) => x.group);

    this.output = this.input.reduce(
      (acc: { name: string; [key: string]: any }[], cur: any) => {
        for (let team of cur.teams) {
          let obj: { name: string; [key: string]: any } = { name: team.name };

          for (let prop of this.props) {
            obj[prop] = prop === cur.group ? team.id : undefined;
          }

          acc.push(obj);
        }

        return acc;
      },
      [] as { name: string; [key: string]: any }[]
    );
  }
}

bootstrapApplication(App);

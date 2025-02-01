import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

export class StaticClass {
  static dict: { [key: string]: Array<{ id: number; text: string }> } = {
    1: [],
    2: [{ id: 1, text: 'Hello' }],
    3: [],
  };
}

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div *ngFor="let i of this.staticClass.dict[2]">
      {{ i.id }}
  </div>
  `,
  imports: [NgFor],
})
export class App {
  name = 'Angular';

  staticClass = StaticClass;
  temp = [{ id: 1, text: 'Hello' }];

  constructor() {
    console.log(this.staticClass.dict[2]);
    console.log(this.temp);
  }
}

bootstrapApplication(App);

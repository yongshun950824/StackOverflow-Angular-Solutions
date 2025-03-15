import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <input type="checkbox" id="check-4" name="checkbox" value="1" (change)="onChecked(1)">
  <label for="check-4"><span>1</span></label>
  <input type="checkbox" id="check-4" name="checkbox" value="2" (change)="onChecked(2)">
  <label for="check-4"><span>2</span></label>
  <input type="checkbox" id="check-4" name="checkbox" value="3" (change)="onChecked(3)">
  <label for="check-4"><span>3</span></label>

  <br />
  {{ checkedValues | json }}
  `,
})
export class App {
  name = 'Angular';
  checkedValues: number[] = [];

  onChecked(value: number) {
    let i = this.checkedValues.indexOf(value);
    if (i > -1) this.checkedValues.splice(i, 1);
    else this.checkedValues.push(value);
  }
}

bootstrapApplication(App);

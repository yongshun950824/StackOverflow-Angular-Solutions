import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [NgFor],
})
export class App {
  name = 'Angular';

  items = [
    { value: 'myval1', label: 'My Value 01' },
    { value: 'myval2', label: 'My Value 02' },
  ];

  getMyValue(todo: string, event: any) {
    console.log('selected value is:', todo);
    console.log('selected text is:', event.target.text);
  }

  getMyValue2(item: any) {
    console.log('selected value is:', item.value);
    console.log('selected text is:', item.label);
  }
}

bootstrapApplication(App);

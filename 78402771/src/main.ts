import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [NgFor, NgIf],
})
export class App {
  name = 'Angular';

  items: any[] = [];
  chunkedItems: any[][] = [];

  ngOnInit() {
    this.items = Array.from({ length: 6 }).map((x, i) => ({
      label: `Label ${i + 1}`,
      value: `Value ${i + 1}`,
    }));

    let halfIndex = Math.floor(this.items.length / 2);
    this.chunkedItems = [
      this.items.slice(0, halfIndex),
      this.items.slice(halfIndex, this.items.length),
    ];
  }
}

bootstrapApplication(App);

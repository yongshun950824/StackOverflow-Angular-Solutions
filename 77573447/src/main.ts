import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <!-- *ngFor directive -->
    <ul>
      <li *ngFor="let i of collection | slice : 1 : 3">{{ i }}</li>
    </ul>

    <!-- New @for syntax -->
    <ul>
      @for (i of collection | slice : 1 : 3; track $index) {
        <li>{{ i }}</li>
      }
    </ul>
  `,
  imports: [CommonModule],
})
export class App {
  collection: string[] = ['a', 'b', 'c', 'd'];
}

bootstrapApplication(App);

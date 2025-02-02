import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [NgTemplateOutlet],
})
export class App {
  name = 'Angular';

  movies: any[] | null = null;
  //movies: any[] | null = [];
}

bootstrapApplication(App);

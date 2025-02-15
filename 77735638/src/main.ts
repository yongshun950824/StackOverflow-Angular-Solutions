import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ColorService, Color } from './color.service';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [CommonModule, MatGridListModule, MatCardModule],
})
export class App {
  name = 'Angular';
  colors!: Color[];
  displaySpinner = false;

  constructor(private colorsService: ColorService) {}

  ngOnInit(): void {
    this.colorsService.getColors().subscribe(
      (colors) => {
        this.colors = Object.values(colors);
        this.colors.sort((a, b) => a.name.localeCompare(b.name));
        console.log(colors);
      },
      (err) => {
        this.displaySpinner = false;
      },
      () => {
        this.displaySpinner = false;
      }
    );
  }
}

bootstrapApplication(App, {
  providers: [provideAnimations(), provideHttpClient()],
});

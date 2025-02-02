import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
})
export class App {
  name = 'Angular';

  getMatchingImage() {
    return {
      imageUrl:
        'https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg',
    };
  }
}

bootstrapApplication(App);

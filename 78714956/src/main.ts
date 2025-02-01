import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { RouterLink, RouterLinkActive, provideRouter } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `./main.html`,
  imports: [RouterLink, RouterLinkActive],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideRouter([])],
});

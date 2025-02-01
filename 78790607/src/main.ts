import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { RouterLink, RouterLinkActive, provideRouter } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `./main.html`,
  imports: [CommonModule],
})
export class App {
  username = 'Angular';

  // isProfileMenuOpen = false;

  // toggleProfileMenu(): void {
  //   this.isProfileMenuOpen = !this.isProfileMenuOpen;
  // }

  logout() {}
}

bootstrapApplication(App, {
  providers: [provideRouter([])],
});

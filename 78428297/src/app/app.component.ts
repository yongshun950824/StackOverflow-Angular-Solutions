import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor]
})
export class AppComponent {
  title = 'compiled';
  gifs = [
    { title: 'GIF1', src: 'assets/gif1.gif' },
    { title: 'GIF2', src: 'assets/gif2.gif' },
    // Gifs
  ];

  constructor(private router: Router) {}

  redirectToGif(gif: { title: string, src: string }) {
    this.router.navigate(['/gif', gif.title]);
  }
}
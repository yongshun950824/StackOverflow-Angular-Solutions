import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  public scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId)!;
    const navElement = document.getElementsByTagName('nav')[0]!;

    const navHeight = navElement.offsetHeight;

    const targetPosition = element.getBoundingClientRect().top + window.scrollY;

    this.viewportScroller.scrollToPosition([0, targetPosition - navHeight]);
  }
}

import { Component } from '@angular/core';
import { Section1Component } from '../section1/section1.component';
import { Section2Component } from '../section2/section2.component';
import { Section3Component } from '../section3/section3.component';
import { Section4Component } from '../section4/section4.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    CommonModule,
  ],
  template: `
    <app-section1></app-section1>
    <app-section2></app-section2>
    <app-section3></app-section3>
    <app-section4></app-section4>
  `,
})
export class HomeComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.pathFromRoot &&
      this.activatedRoute.pathFromRoot.length > 0 &&
      this.activatedRoute.pathFromRoot[1].url.subscribe((url) => {
        let elementId = url[0].path;

        this.scrollToSection(elementId);
      });
  }

  public scrollToSection(sectionId: string): void {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const navHeight = this.navigationService.getNavHeight();
      const yPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  }
}

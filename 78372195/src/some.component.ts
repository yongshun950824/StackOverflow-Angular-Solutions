import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-some',
  standalone: true,
  template: `
  <h2>Some</h2>
  <br />
  <a [routerLink]="['', {outlets:{details:['my-details']}}]">Details</a>
  <br />

  <a [routerLink]="[{outlets:{details:['my-details']}}]" [relativeTo]="route.parent">Details (with relativeTo)</a>
  `,
  imports: [RouterLink, RouterOutlet],
})
export class SomeComponent {
  constructor(public route: ActivatedRoute) {}

  ngAfterViewInit() {
    console.log(this.route.parent);
  }
}

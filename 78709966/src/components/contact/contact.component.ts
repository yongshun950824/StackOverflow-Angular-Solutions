import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `<h1>Contact</h1>

<button (click)="loadEducation()">Load educations</button>

<router-outlet></router-outlet>
<router-outlet name="modal"></router-outlet>
  `,
  imports: [RouterModule],
})
export class ContactComponent {
  constructor(private router: Router) {}

  public loadEducation(): void {
    this.router.navigate(['contact', { outlets: { modal: ['education'] } }]);
    // this.router.navigate(['contact/education']);
  }
}

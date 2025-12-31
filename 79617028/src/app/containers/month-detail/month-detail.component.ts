import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-month-detail',
  template: `
    <h1>Month Detail {{ month }}!</h1>
  `,
  standalone: false,
})
export class MonthDetailComponent {
  month = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe({
      next: (params) => {
        this.month = params['id'];
      },
    });
  }
}

import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-claims-insights',
  template: `
    <h1>ClaimsInsights</h1>`,
})
export class ClaimsInsightsComponent {
  name = 'Angular';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const claimID = this.activatedRoute.snapshot.paramMap.get('claimID');
    const type = this.activatedRoute.snapshot.paramMap.get('type');

    console.log('claimID', claimID);
    console.log('type', type);
  }
}

import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-claims-summary',
  template: `
    <h1>ClaimsSummary</h1>
    
    <button (click)="redirectTo('test')">Redirect to Claim Insights</button>
    
    <router-outlet></router-outlet>`,
    imports: [RouterOutlet]
})
export class ClaimsSummaryComponent {
  name = 'Angular';

  claimId: string | null = null;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  redirectTo(type: string) {
    const claimID = this.activatedRoute.snapshot.paramMap.get('claimID');
    //1;

    console.log('claimID', claimID)
    console.log('type', type)

    //this.router.navigate(['claims-summary', claimID, 'claims-insights', type]);

    if (claimID) {
      this.router.navigate(['claims-summary', claimID, 'claims-insights', type]);

      //this.router.navigate(['claims-insights', type], {
      //  relativeTo: this.activatedRoute,
      //});
    } else {
      console.error('reroute is failing');
    }
  }
}

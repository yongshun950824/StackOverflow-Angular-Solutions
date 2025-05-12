import { Component, OnInit, VERSION } from '@angular/core';
import { Observable, of } from 'rxjs';
import { registrationService } from './services/registration.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  branchModel$: Observable<any[]>;
  reserve: { branchName: string } = { branchName: null };

  constructor(private registrationService: registrationService) {}

  ngOnInit(): void {
    this.loadBranches();
  }

  loadBranches() {
    this.registrationService.getBranchName().subscribe(data => {
      console.log(data);
      this.branchModel$ = of(data['data']['branchArr']);
    });
  }

  getBankInfo(event: any) {}
}

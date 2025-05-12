import { Component, OnInit, VERSION } from '@angular/core';
import {
  PortfolioEpicModel,
  PortfolioService
} from '../services/portfolio.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PortfolioService]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  portfolioList: PortfolioEpicModel[];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.refreshPortfolioEpicsList(0).subscribe(
      response => {
        this.portfolioList = response;
      },
      err => {
        console.error(err);
      }
    );

    this.portfolioService.refreshPortfolioEpicsListWithError(0).subscribe(
      response => {
        this.portfolioList = response;
      },
      err => {
        console.error(err);
      }
    );
  }
}

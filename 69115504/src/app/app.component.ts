import { Component, OnInit, VERSION } from '@angular/core';
import { SearchLogicService } from './search-logic.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  constructor(private searchLogic: SearchLogicService) {}

  ngOnInit() {
    this.jobsLength();
  }

  jobsLength() {
    this.searchLogic.items$.subscribe((value: any[]) => {
      let jobs: any[] = value;
      console.log(jobs);
      console.log(jobs.length);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { HouseGuidelineResponse } from '../models/house-guideline-response';
import { HouseGuidelinesService } from '../services/house-guidelines.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
})
export class HouseComponent implements OnInit {
  houseData: HouseGuidelineResponse[];
  houseList = [];

  constructor(
    //private activatedRoute: ActivatedRoute,
    //private router: Router,
    //private houseSummaryService: HouseService,
    private houseGuidelinesService: HouseGuidelinesService
  ) {}

  ngOnInit() {
    this.callHouseService('');
  }

  callHouseService(houseCodeList) {
    this.houseGuidelinesService.getHouseData(houseCodeList).subscribe(
      (data) => {
        this.houseData = data;
        console.log('display house guidelines', this.houseData);
        console.log('first house data: ', this.houseData[0]);
      },
      (error) => {
        console.log('Error Getting House Policy Info!');
      }
    );
  }
}

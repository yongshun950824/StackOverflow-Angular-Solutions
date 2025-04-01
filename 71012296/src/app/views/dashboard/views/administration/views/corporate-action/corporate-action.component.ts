import { Component, OnInit } from '@angular/core';
import { CorporateActionService } from './corporate-action.service';

@Component({
  selector: 'app-corporate-action',
  templateUrl: './corporate-action.component.html',
  styleUrls: ['./corporate-action.component.css']
})
export class CorporateActionComponent implements OnInit {

  corporateDatas: any;
  startDate: any;

  constructor(private service : CorporateActionService) { }

  ngOnInit(): void {
    this.corporateDatas = this.service.corporateDatas;
    this.startDate = this.service.startDate;
  }

}
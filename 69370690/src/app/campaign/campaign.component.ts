import { Component, OnInit } from '@angular/core';
import { GetServiceService } from '../get-service.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {
  campaigns;
  constructor(
    private campaignService: GetServiceService,
  ) { }

  ngOnInit(): void {
    this.campaigns = this.campaignService.getCampaign();
  }

}
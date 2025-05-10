import { Component, OnInit, TemplateRef, VERSION, ViewChild } from '@angular/core';
import { SiteInfoService } from '../site-info.service';

@Component({
  selector: 'site-info',
  templateUrl: './site-info.component.html',
  styleUrls: ['./site-info.component.css']
})
export class SiteInfoComponent implements OnInit {
  @ViewChild('actionTpl', { static: true }) actionTpl: TemplateRef<any>;
  @ViewChild('addressTpl', { static: true }) addressTpl: TemplateRef<any>;

  isLoading: boolean = false;
  options: any = {};
  allSiteInfoList: any[] = [];
  columns: any = {};


  constructor(private siteInfoService: SiteInfoService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.siteInfoService.getAllSiteInfo1().subscribe(
      data => {
        this.allSiteInfoList = data.results.infos;
        console.log(data);
      },
      error => {
        //this.store.dispatch(loadErrorMessagesSuccess(error));
        this.isLoading = false;
      }
    );

    this.options = {
      loader: true
    };
    this.columns = [
      {
        key: 'id',
        title: '<div class="blue"><i class="fa fa-id-card-o"></i> ID</div>',
        width: 60,
        sorting: true,
        align: {
          head: 'center',
          body: 'center'
        },
        vAlign: {
          head: 'bottom',
          body: 'middle'
        }
      },
      {
        key: 'name',
        title: '<div class="blue"><i class="fa fa-user"></i> Name</div>',
        width: 100
      },
      {
        key: 'email',
        title: '<div class="blue"><i class="fa fa-phone"></i> Email</div>',
        align: {
          head: 'left'
        },
        width: 100,
        sorting: true
      },
      {
        key: 'address',
        title:
          '<div class="blue"><i class="fa fa-building"></i>  Address</div>',
        width: 300,
        sorting: false,
        align: {
          head: 'left',
          body: 'right'
        },
        noWrap: {
          head: true,
          body: true
        },
        cellTemplate: this.addressTpl
      },
      {
        key: 'website',
        title:
          '<div class="blue"><i class="fa fa-calendar-times-o"></i> Website</div>',
        width: 60,
        sorting: true,
        align: {
          head: 'center',
          body: 'center'
        }
      },
      {
        key: 'zip',
        title: '<div class="blue">Action</div>',
        align: {
          head: 'center',
          body: 'center'
        },
        sorting: false,
        width: 80,
        cellTemplate: this.actionTpl
      }
    ];
  }

  edit(row: any) {}

  remove(rowIndex: any) {}
}

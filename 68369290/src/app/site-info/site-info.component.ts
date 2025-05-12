import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SUserInfoService } from '../suser-info.service';

@Component({
  selector: 'app-site-info',
  templateUrl: './site-info.component.html',
  styleUrls: ['./site-info.component.css']
})
export class SiteInfoComponent implements OnInit {
  @ViewChild('actionTpl', {
    static: true
  })
  actionTpl: TemplateRef<any>;
  @ViewChild('addressTpl', {
    static: true
  })
  addressTpl: TemplateRef<any>;
  @ViewChild('companyTpl', {
    static: true
  })
  companyTpl: TemplateRef<any>;
  @ViewChild('rolesTpl', {
    static: true
  })
  rolesTpl: TemplateRef<any>;

  isLoading: boolean = false;
  options: any = {};
  userInfoList: any[] = [];
  columns: any = {};

  constructor(private userInfoService: SUserInfoService) {}

  ngOnInit(): void {
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
        key: 'first_name',
        title: '<div class="blue"><i class="fa fa-user"></i> First Name</div>',
        width: 100
      },
      {
        key: 'last_name',
        title: '<div class="blue"><i class="fa fa-user"></i> Last Name</div>',
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
        key: 'company',
        title: '<div class="blue">Company</div>',
        align: {
          head: 'left'
        },
        width: 100,
        sorting: true,
        cellTemplate: this.companyTpl
      },
      {
        key: 'roles',
        title: '<div class="blue">Roles</div>',
        align: {
          head: 'left'
        },
        width: 100,
        sorting: true,
        cellTemplate: this.rolesTpl
      },
      {
        key: '',
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

    this.isLoading = true;
    this.userInfoService.getAllUserDetail().subscribe(
      data => {
        this.userInfoList = [data.results.user];
        console.log(data);

        this.options = {
          ...this.options,
          loader: false
        };
      },
      error => {
        this.isLoading = false;
      }
    );
  }

  edit(row: any) {}

  remove(rowIndex: any) {}
}

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
  @ViewChild('activeTpl', {
    static: true
  })
  activeTpl: TemplateRef<any>;
  @ViewChild('departmentTpl', {
    static: true
  })
  departmentTpl: TemplateRef<any>;
  @ViewChild('rolesTpl', {
    static: true
  })
  rolesTpl: TemplateRef<any>;
  @ViewChild('idTpl', {
    static: true
  })
  idTpl: TemplateRef<any>;

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
        title: '<div class="blue"> ID</div>',
        width: 60,
        sorting: true,
        align: {
          head: 'center',
          body: 'center'
        },
        vAlign: {
          head: 'bottom',
          body: 'middle'
        },
        cellTemplate: this.idTpl
      },
      {
        key: 'first_name',
        title: '<div class="blue">First Name</div>',
        width: 100
      },
      {
        key: 'last_name',
        title: '<div class="blue">Last Name</div>',
        width: 100
      },
      {
        key: 'department',
        title: '<div class="blue">Department</div>',
        align: {
          head: 'left'
        },
        width: 100,
        sorting: true,
        cellTemplate: this.departmentTpl
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
        key: 'active',
        title: '<div class="blue">Active</div>',
        align: {
          head: 'left'
        },
        width: 100,
        sorting: true,
        cellTemplate: this.activeTpl
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
        console.log(data);
        this.userInfoList = [data.results.user];

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
}

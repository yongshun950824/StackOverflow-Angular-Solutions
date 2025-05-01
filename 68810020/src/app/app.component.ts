import { Component, TemplateRef, VERSION, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ICompany } from './model/company.model';
import { CompanyService } from './services/company.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  @ViewChild('actionTpl', {
    static: true
  })
  actionTpl!: TemplateRef<any>;
  @ViewChild('addressTpl', {
    static: true
  })
  addressTpl!: TemplateRef<any>;
  @ViewChild('countryTpl', {
    static: true
  })
  countryTpl!: TemplateRef<any>;
  @ViewChild('idTpl', {
    static: true
  })
  idTpl!: TemplateRef<any>;

  panelShow = true;
  options = {};
  data = [];
  allCompanyList: any[] = [];
  company!: ICompany;
  dataBK = [];
  columns: any = {};
  columnsWithFeatures: any;
  isLoading = false;
  isSubmitted = false;
  data1: any;
  pageLabel: string;

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService
  ) //private router: Router,
  //private store: Store < AppState > ,
  {}

  ngOnInit(): void {
    this.isLoading = true;
    this.loadMyCompany();
    this.loadDatatable();
  }

  loadMyCompany() {
    this.companyService.getMyCompany().subscribe(
      data => {
        this.allCompanyList = [data.results.company];
        console.log(this.allCompanyList);
      },
      error => {
        //this.store.dispatch(loadErrorMessagesSuccess(error));
        this.isLoading = false;
      }
    );
  }

  loadDatatable() {
    this.columns = [
      {
        key: 'id',
        title: '<div class="blue"><i class="fa fa-id-card-o"></i> SN.</div>',
        width: 60,
        sorting: true,
        cellTemplate: this.idTpl,
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
        title: '<div class="blue"><i class="fa fa-user"></i> Company</div>',
        width: 100,
        sorting: true
      },
      {
        key: 'website',
        title: '<div class="blue"><i class="fa fa-envelope"></i> Website</div>',
        align: {
          head: 'left'
        },
        width: 100,
        sorting: true
      },
      {
        key: 'country',
        title: '<div class="blue"><i class="fa fa-calendar"></i> Country</div>',
        align: {
          head: 'left'
        },
        width: 100,
        sorting: true,
        cellTemplate: this.countryTpl
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
  }
}

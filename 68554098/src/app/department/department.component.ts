import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  @ViewChild('actionTpl', {
    static: true
  })
  actionTpl: TemplateRef<any>;
  @ViewChild('addressTpl', {
    static: true
  })
  addressTpl: TemplateRef<any>;
  @ViewChild('createdAtTpl', {
    static: true
  })
  createdAtTpl: TemplateRef<any>;

  isLoading: boolean = false;
  options: any = {};
  departmentList: any[] = [];
  columns: any = {};

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.departmentService.getDepartmentDetail().subscribe(
      data => {
        this.departmentList = [data.results.departments];
        console.log(data);
      },
      error => {
        this.isLoading = false;
      }
    );

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
        }
      },
      {
        key: 'department_name',
        title: '<div class="blue">Department Name</div>',
        width: 100
      },
      {
        key: 'created_at',
        title: '<div class="blue">Date Created</div>',
        width: 100,
        cellTemplate: this.createdAtTpl
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

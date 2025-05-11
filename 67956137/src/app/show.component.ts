import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  constructor(private service: SharedService) {}

  PatientList: any = [];
  ModalTitle: any;
  ActivateAddEditDepComp: boolean = false;
  ptnt: any;

  PatientIdFilter: string = '';
  PatientNameFilter: string = '';
  PatientListWithoutFilter: any = [];

  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: any;

  displayedColumns = [
    'Pt_Id',
    'Pt_Name',
    'Pt_Age',
    'Department',
    'Docname',
    'Pt_Email',
    'Pt_Mob',
    'Options'
  ];

  ngOnInit(): void {
    this.refreshPatientList();
  }

  refreshPatientList() {
    this.service.getPatientList().subscribe(data => {
      this.PatientList = data;
      this.PatientListWithoutFilter = data;
      this.dataSource = new MatTableDataSource(this.PatientList);
      this.dataSource.paginator = this.paginator;
    });
  }

  addClick() {
    this.ptnt = {
      Pt_Id: 0,
      Pt_Name: '',
      Pt_Age: 0,
      Department: '',
      Docname: '',
      Pt_Email: '',
      Pt_Mob: ''
    };
    this.ModalTitle = 'Add Patient';
    this.ActivateAddEditDepComp = true;
  }

  editClick(item: any) {
    this.ptnt = item;
    this.ModalTitle = 'Edit Patient';
    this.ActivateAddEditDepComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.service.deletePatient(item.Pt_Id).subscribe(data => {
        alert(data.toString());
        this.refreshPatientList();
      });
    }
  }

  closeClick() {
    this.ActivateAddEditDepComp = false;
    this.refreshPatientList();
  }
}

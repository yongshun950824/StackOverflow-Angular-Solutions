import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-employee-contact-list',
  standalone: true,
  templateUrl: './employee-contact-list.component.html',
  styleUrls: ['./employee-contact-list.component.css'],
  imports: [CommonModule, MatTableModule, MatTooltipModule, RouterModule],
})
export class EmployeeContactListComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;

  employeeDetail: any = {
    id: 1,
  };

  enableAddEmployeeBtn = false;

  refreshAddEmployeeBtn() {
    this.enableAddEmployeeBtn = this.dataSource.data.length == 0;
  }

  displayColumn = [
    'workEmailId',
    'personalEmailId',
    'primaryMobileNo',
    'secondaryMobileNo',
    'workPhoneNo',
    'extensionNo',
    'status',
    'action',
  ];

  ngOnInit() {
    let data = [
      {
        workEmailId: 1,
        personalEmailId: 1,
        primaryMobileNo: '123456',
        secondaryMobileNo: null,
        workPhoneNo: '123456',
        extensionNo: null,
        status: 'Active',
      },
    ];

    this.dataSource = new MatTableDataSource<any>(data);
    this.refreshAddEmployeeBtn();
  }

  deleteEmployeeContact(id: number) {
    /* Replace observable with your observable to remove employee contact */
    of(true).subscribe({
      next: (isDeleted: boolean) => {
        if (isDeleted) {
          this.dataSource.data = []; // Clear dataSource
          // Or refresh the dataSource

          this.refreshAddEmployeeBtn();
        }
      },
    });
  }
}

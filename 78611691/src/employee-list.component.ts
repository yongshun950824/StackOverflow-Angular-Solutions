import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employeeInterface';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employeesList">
      <li>{{ employee.name }}</li>
    </ul>
  `,
  styles: [],
})
export class EmployeeListComponent implements OnInit {
  public employeesList: IEmployee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService
      .getEmployees()
      .subscribe((data) => (this.employeesList = data));
  }
}

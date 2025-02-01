import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './employeeInterface';

@Component({
  selector: 'app-root',
  //standalone: true,
  template: `
    <app-employee-list></app-employee-list>
  `,
})
export class AppComponent {
  name = 'Angular';

  public employeesList: IEmployee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService
      .getEmployees()
      .subscribe((data) => (this.employeesList = data));
  }
}

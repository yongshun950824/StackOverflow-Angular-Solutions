import { Component, OnInit } from '@angular/core';
import { EmployeeEventService } from '../employee-event.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  constructor(public employeeEventService: EmployeeEventService) {}

  ngOnInit() {
    this.employeeEventService.getEvent().subscribe(event => {
      if (event == 'profile') this.profileFunction();
      else if (event == 'contact') this.contactFunction();
    });
  }

  profileTemplate: boolean = false;
  contactTemplate: boolean = false;

  profileFunction() {
    this.profileTemplate = true;
    this.contactTemplate = false;
  }

  contactFunction() {
    this.profileTemplate = false;
    this.contactTemplate = true;
  }
}

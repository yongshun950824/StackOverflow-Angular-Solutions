import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees = [
    {
      id: 1,
      name: 'Aaron',
      contact: '0123456789'
    }
  ];

  constructor() {}

  ngOnInit() {}
}

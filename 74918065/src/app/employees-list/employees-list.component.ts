import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  employee: Employee[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@mail.com',
      phone: 1234567890,
      salary: 100000,
      department: 'IT',
    },
    {
      id: 2,
      name: 'Bob Builder',
      email: 'bob.build@mail.com',
      phone: 2345678901,
      salary: 200000,
      department: 'HR',
    },
    {
      id: 3,
      name: 'Phineas Ferb',
      email: 'phineas.ferb@mail.com',
      phone: 3456789012,
      salary: 300000,
      department: 'Scientist',
    },
    {
      id: 4,
      name: 'Nobita Nobi',
      email: 'nobita.nobi@mail.com',
      phone: 4567890123,
      salary: 400000,
      department: 'Marketing',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

export class Employee {
  id: number;
  name: string;
  email: string;
  phone: number;
  salary: number;
  department: string;
}

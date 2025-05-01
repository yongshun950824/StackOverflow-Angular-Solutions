import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Gender } from '../models/gender.model';
import { Team } from '../models/team.model';

const EMPLOYEE_LIST = [
  {
    id: 1,
    name: 'Employee A',
    birthDate: '1989-01-01',
    email: 'employee1@companyA.com',
    startDate: '2021-01-01',
    cpf: '',
    team: Team.Backend,
    gender: Gender.Male
  },
  {
    id: 2,
    name: 'Employee B',
    birthDate: '1988-02-01',
    email: 'employee2@companyA.com',
    startDate: '2021-02-01',
    cpf: '',
    team: Team.Frontend,
    gender: Gender.Female
  },
  {
    id: 3,
    name: 'Employee C',
    birthDate: '1994-01-01',
    email: 'employee1@companyA.com',
    startDate: '2021-03-01',
    cpf: '',
    team: Team.Mobile,
    gender: Gender.Other
  }
];

@Injectable({
  providedIn: 'root'
})
export class peopleService {
  getPeopleById(employeeId: number): Observable<any> {
    return of(EMPLOYEE_LIST.find(e => e.id == employeeId));
  }
}

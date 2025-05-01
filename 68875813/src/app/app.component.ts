import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Gender } from './models/gender.model';
import { Team } from './models/team.model';
import { peopleService } from './services/people.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  teams = [
    { id: 0, name: Team[Team.Mobile] },
    { id: 1, name: Team[Team.Frontend] },
    { id: 2, name: Team[Team.Backend] }
  ];

  genders = [
    { id: 0, name: Gender[Gender.Male] },
    { id: 1, name: Gender[Gender.Female] },
    { id: 2, name: Gender[Gender.Other] }
  ];

  employeeForm = this.formBuilder.group({
    name: '',
    gender: 2,
    birthDate: '',
    email: '',
    startDate: '',
    cpf: '',
    team: 2
  });

  list = [
    {
      employeeId: 1
    }
  ];
  employee: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private peopleService: peopleService
  ) {}

  ngOnInit(): void {
    this.peopleService.getPeopleById(this.list[0].employeeId).subscribe(
      people => {
        this.employee = people;

        this.employeeForm.patchValue({
          name: people.name,
          gender: people.gender,
          birthDate: new Date(people.birthDate),
          email: people.email,
          startDate: new Date(people.startDate),
          cpf: people.cpf,
          team: people.team
        });
      },
      error => console.log(error)
    );
  }

  get gender() {
    return this.employeeForm.get('gender').value;
  }

  get team() {
    return this.employeeForm.get('team').value;
  }

  onSubmit() {}
}

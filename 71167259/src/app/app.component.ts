import { Component, VERSION } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  public employee: Employee= {
    birth_date: "",
    // designations: <Designations>{
    //   id: '',
    //   title: '',
    //   emp_no: '',
    //   from_date: '',
    //   to_date: '',
    // },
    emp_no: "",
    first_name: "",
    gender: "",
    hire_date: "",
    id: "",
    last_name: "",
    // salaries: <Salary>{
    //   id: "",
    //   emp_no: "",
    //   salary: "",
    //   rom_date: "",
    //   to_date: "",
    // },
  };

  constructor() {
  }

  ngOnInit(): void {
  }

getValues(){
    console.log(this.employee);
  }
}

import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  studiesType: any = [
    { name: 'Basic' },
    { name: 'Secondary' },
    { name: 'Undergraduate' },
    { name: 'Graduate' },
  ];

  educationalData = [
    { studies_type: 'basic', course: 'Basic Crs', year: 1980, awards: '' },
    { studies_type: 'secondary', course: 'Sec Crs', year: 1998, awards: '' },
  ];
  educationalDetails = [];
  selectedStudiesType = '';

  ngOnInit() {
    this.educationalDetails = this.educationalData;
  }

  public searchStudies(name: any) {
    let obj = this.educationalData.filter(
      (m) => m.studies_type == name.toLowerCase()
    );
    console.log(this.educationalData);
    this.educationalDetails = obj;
    console.log(this.educationalDetails);
  }
}

export interface IUserEducationalBackground {
  id: number;
  user_id: number;
  studies_type: string;
  year: number;
  course: string;
}

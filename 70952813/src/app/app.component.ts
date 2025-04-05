import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  EmployeeData!: any[];

  ngOnInit() {
    this.getAllEmployee();
  }

  getEmployee() {
    // return this.http.get<any>(this.localUrlAPI+"/salarie/GetAllEmployee")
    return this.http.get<any>('/assets/data.json').pipe(
      map((res: any) => {
        return res.Data;
      })
    );
  }

  getAllEmployee() {
    this.getEmployee().subscribe((res) => {
      this.EmployeeData = res;
      console.log(this.EmployeeData);
    });
  }
}

import { Component, VERSION } from '@angular/core';
import { IResponse, StudentResponse } from './models/response.model';
import { IStudent } from './models/student.model';
import { StudentService } from './services/student.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  student!: IStudent;
  id!: number;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    //this.id = this.route.snapshot.params['id'];
    this.id = 1;
    this.loadStudentById();
  }

  loadStudentById() {
    this.studentService.getStudentById(this.id).subscribe(
      (data: StudentResponse) => {
        console.log(data);
        this.student = data.results.student;
      },
      error => {
        //this.store.dispatch(loadErrorMessagesSuccess(error));
      }
    );
  }
}

import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { StudentWithSchoolCarData } from './model';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
   <pre>{{ students | json }}</pre>
  `,
  imports: [CommonModule],
})
export class App {
  students!: StudentWithSchoolCarData[];

  constructor(private studentService: StudentsService) {}

  ngOnInit() {
    this.studentService.getStudentsWithSchoolCarData().subscribe({
      next: (resp: any[]) => {
        this.students = resp;
      },
    });
  }
}

bootstrapApplication(App, {
  providers: [provideHttpClient()],
});

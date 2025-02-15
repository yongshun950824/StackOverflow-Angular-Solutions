import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details-list',
  templateUrl: './student-details-list.component.html',
  styleUrls: ['./student-details-list.component.css'],
  standalone: true,
})
export class StudentDetailsListComponent implements OnInit {
  stdID!: string;
  stdNAME!: string;

  previousStud!: any | null;
  nextStud!: any | null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    // Display Student ID in the Component
    this.route.params.subscribe((data) => {
      this.stdID = data['id'];
      this.stdNAME = data['name'];
      //console.log(this.stdID);

      this.studentService.getPreviousStudent(parseInt(this.stdID)).subscribe({
        next: (student) => {
          this.previousStud = student;
        },
      });

      this.studentService.getNextStudent(parseInt(this.stdID)).subscribe({
        next: (student) => {
          this.nextStud = student;
        },
      });
    });
  }

  previousStudent() {
    this.router.navigate([
      '/students',
      this.previousStud.id,
      this.previousStud.name,
    ]);
  }

  nextStudent() {
    this.router.navigate(['/students', this.nextStud.id, this.nextStud.name]);
  }
}

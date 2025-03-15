import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class StudentListComponent implements OnInit {
  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.students = this.studentService.students;
  }
}

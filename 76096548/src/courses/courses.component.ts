import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from '../courses';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CoursesComponent implements OnInit {
  courses: Observable<Courses[]>;

  constructor(private service: CoursesService) {}

  ngOnInit(): void {
    this.courses = this.service.fetchCourses();
  }
}

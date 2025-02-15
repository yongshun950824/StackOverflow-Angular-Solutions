import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  public students: any[] = [];

  constructor() {
    this.getStudents().subscribe({
      next: (students) => {
        this.students = students;
      },
    });
  }

  getStudents() {
    return of([
      {
        id: 1,
        name: 'Student 1',
      },
      {
        id: 2,
        name: 'Student 2',
      },
      {
        id: 3,
        name: 'Student 3',
      },
    ]);
  }

  getPreviousStudent(id: number) {
    let currentIndex = this.students.findIndex((x) => x.id == id);
    let index = currentIndex - 1;

    return of(this.students[index]);
  }

  getNextStudent(id: number) {
    let currentIndex = this.students.findIndex((x) => x.id == id);
    let index = currentIndex + 1;

    return of(this.students[index]);
  }
}

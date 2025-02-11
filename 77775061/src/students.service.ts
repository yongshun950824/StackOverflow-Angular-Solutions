import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concat, map, forkJoin, delay, Observable } from 'rxjs';
import { Car, School, Student, StudentWithSchoolCarData } from './model';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  studentUrl = '/assets/students.json';
  schoolUrl = '/assets/schools.json';
  carUrl = '/assets/cars.json';

  constructor(private http: HttpClient) {}

  getStudentsWithSchoolCarData(): Observable<StudentWithSchoolCarData[]> {
    return forkJoin([
      this.http.get<Student[]>(this.studentUrl),
      this.http.get<School[]>(this.schoolUrl),
      this.http.get<Car[]>(this.carUrl),
    ]).pipe(
      map(([students, schools, cars]: any[]) => {
        return students.map((x: Student) => ({
          ...x,
          school: schools.find((y: School) => y.id == x.schoolId),
          car: cars.find((y: Car) => y.id == x.carId),
        }));
      })
    );
  }
}

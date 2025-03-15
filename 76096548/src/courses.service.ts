import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Courses } from './courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  listofCourses: Courses[] = [];
  constructor(private httpClient: HttpClient) {}

  fetchCourses() {
    return this.httpClient
      .get<{ [key: string]: Courses }>(
        'https://testang-6c37f-default-rtdb.firebaseio.com/courses.json'
      )
      .pipe(
        map((response) => {
          const courses = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              courses.push({ ...response[key], id: key });
            }
          }
          return courses;
        })
      );
  }
}

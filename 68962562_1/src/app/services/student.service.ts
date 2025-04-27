import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse, StudentResponse } from '../models/response.model';
import { IStudent } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) {}

  getStudentById(id: number): Observable<StudentResponse> {
    // return this.http.get<IStudent[]>(this.api.baseURL + 'students/fetchbyid/' + id, this.httpOptions);
    return this.http.get<StudentResponse>('assets/data.json');
  }
}

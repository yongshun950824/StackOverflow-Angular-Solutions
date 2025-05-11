import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable()
export class SharedService {
  constructor(private http: HttpClient) {}

  getPatientList() {
    return this.http.get('/assets/patients.json');
  }

  deletePatient(patientId: number) {
    return this.http.delete('/Patient/Delete/' + patientId);
  }
}

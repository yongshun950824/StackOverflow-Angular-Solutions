import { Component, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { PatientModel } from './models/PatientModel.model';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: `main.html`,
  imports: [RouterOutlet, HttpClientModule, AsyncPipe, FormsModule],
})
export class App {
  title = 'Patient Details';
  http = inject(HttpClient);

  patients$ = this.GetPatients();
  //patient$=this.GetPatientByDate();
  inputValue: string = '';
  patientDetail: PatientModel | null = null;

  private GetPatients(): Observable<PatientModel[]> {
    return this.http.get<PatientModel[]>(
      'https://localhost:7076/api/Appointments'
    );
  }

  showAlert(): void {
    if (this.inputValue) {
      this.http
        .get<PatientModel>(
          'https://localhost:7076/api/Appointments/date?date=' + this.inputValue
        )
        .subscribe((res: PatientModel) => {
          alert(
            'Name:' +
              res.name +
              ' && id:' +
              res.id +
              ' && Appointment Date:' +
              res.appointmentDate
          );
        });
    } else {
      alert('None');
    }
  }

  GetPatientByDate(): void {
    this.http
      .get<PatientModel>(
        'https://localhost:7076/api/Appointments/date?date=' + this.inputValue
      )
      .subscribe((res: PatientModel) => {
        this.patientDetail = res;
      });
  }
}

bootstrapApplication(App);

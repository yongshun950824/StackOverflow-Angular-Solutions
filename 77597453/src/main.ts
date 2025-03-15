import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, provideRouter, RouterModule } from '@angular/router';
import 'zone.js';
import { of } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';
import { EmployeeContactListComponent } from './employee-contact-list/employee-contact-list.component';
import { AddEmployeeContactComponent } from './add-employee-contact/add-employee-contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [CommonModule, MatTableModule, MatTooltipModule, RouterModule],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    provideAnimations(),
    provideRouter([
      {
        path: 'employee/addEmployeeContact',
        component: AddEmployeeContactComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        component: EmployeeContactListComponent,
      },
    ]),
    provideHttpClient(),
  ],
});

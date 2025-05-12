import { NgModule } from '@angular/core';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'employees-detail/:id',
    component: EmployeeDetailComponent
  },
  {
    path: 'employees-edit/:id',
    component: EmployeeEditComponent
  },
  {
    path: '**',
    redirectTo: 'employees'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'employees'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

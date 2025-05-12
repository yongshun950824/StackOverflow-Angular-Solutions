import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    EmployeeDetailComponent,
    EmployeeEditComponent,
    EmployeesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { MatStepperModule } from '@angular/material/stepper';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SignupCompanyComponent } from './signup-company/signup-company.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    MatStepperModule
  ],
  declarations: [AppComponent, HelloComponent, SignupCompanyComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

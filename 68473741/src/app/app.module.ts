import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyService } from './features/company/services/company.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, CompanyProfileComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CompanyService, AuthService]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  imports: [BrowserModule, FormsModule, ToastrModule.forRoot()],
  declarations: [AppComponent, HelloComponent, DashboardComponent],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule {}

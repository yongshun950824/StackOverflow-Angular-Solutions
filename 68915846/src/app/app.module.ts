import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AdminEventsComponent } from './admin-events/admin-events.component';
import { AdminEventDetailsComponent } from './admin-event-details/admin-event-details.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatTableModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AdminEventsComponent,
    AdminEventDetailsComponent,
    AdminDashboardComponent,
    AdminLayoutComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

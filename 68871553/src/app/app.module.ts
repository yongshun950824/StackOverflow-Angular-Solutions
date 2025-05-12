import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SProductManagementComponent } from './sproduct-management/sproduct-management.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdSortableHeader } from './directives/sortable.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [
    AppComponent,
    HelloComponent,
    SProductManagementComponent,
    NgbdSortableHeader
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

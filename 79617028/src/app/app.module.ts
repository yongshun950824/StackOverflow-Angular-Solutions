import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//import { MonthListComponent } from './containers/month-list/month-list.component';
import { MonthDetailComponent } from './containers/month-detail/month-detail.component';
//import { BudgetEntryComponent } from './components/budget-entry/budget-entry.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing,module';
//import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    //MonthListComponent,
    MonthDetailComponent,
    //BudgetEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

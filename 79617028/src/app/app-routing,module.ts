import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthDetailComponent } from './containers/month-detail/month-detail.component';
//import { BudgetEntryComponent } from './components/budget-entry/budget-entry.component';

const routes: Routes = [
  {
    path: 'month/:id',
    component: MonthDetailComponent
  },
  //{
  //  path: 'entry/:id',
  //  component: BudgetEntryComponent
  //},
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'month/1'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
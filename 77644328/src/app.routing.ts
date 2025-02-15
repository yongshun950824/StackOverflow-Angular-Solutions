import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentDetailsListComponent } from './student-details-list/student-details-list.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  // { path:'student-data', component: StudentDataComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'students/:id/:name', component: StudentDetailsListComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

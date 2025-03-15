import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddToDosComponent } from './add-to-dos/add-to-dos.component';
import { AppComponent } from './app.component';

const ROUTES: Routes = [
  {
    path: 'add-to-dos',
    component: AddToDosComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

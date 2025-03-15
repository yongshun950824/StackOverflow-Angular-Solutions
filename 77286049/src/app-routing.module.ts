import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewcardComponent } from './newcard/newcard.component';
import { ShowcardsComponent } from './showcards/showcards.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'newcard', component: NewcardComponent },
  { path: '', component: ShowcardsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

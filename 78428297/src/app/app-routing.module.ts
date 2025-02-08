// Inside your app-routing.module.ts file
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifComponent } from '../gif/gif.component';
import { GifDetailComponent } from '../gif/gif-detail.component';

const routes: Routes = [
  { path: 'gifs', component: GifComponent },
  { path: 'gif/:title', component: GifDetailComponent },
  // Add more routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

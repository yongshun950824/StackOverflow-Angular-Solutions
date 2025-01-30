import { NgModule } from '@angular/core';
import { provideRoutes, RouterModule } from '@angular/router';
import routeConfig from './route';

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

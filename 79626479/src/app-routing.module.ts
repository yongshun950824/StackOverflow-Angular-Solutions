import { NgModule } from '@angular/core';
import { provideRoutes, RouterModule } from '@angular/router';
// Option 1 - Import route
import { routes } from './route';

// Option 2 - Import route
//import routes from './route';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

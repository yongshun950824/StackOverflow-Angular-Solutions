import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomeComponent } from './components/home/home.component';
//import { AboutComponent } from './components/about/about.component';
//import { DashboardComponent } from './components/dashboard/dashboard.component';
//import { AuthGuard } from './auth.gard';
import { ListComponent } from './list.component';
import { TestComponent } from './test/test.component';

const myModule = () =>
  import('./my-routing/my-routing.module').then((x) => x.MyRoutingModule);
const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'experiment', loadChildren: myModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

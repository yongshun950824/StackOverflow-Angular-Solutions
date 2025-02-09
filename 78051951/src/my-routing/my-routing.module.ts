import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from '../list.component';
import { TestComponent } from '../test/test.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'test', component: ListComponent, outlet: 'outlet1' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyRoutingModule {}

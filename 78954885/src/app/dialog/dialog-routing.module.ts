import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogEntryComponent } from './dialog-entry/dialog-entry.component';
import { HelloComponent } from '../hello/hello.component';

const routes: Routes = [
  {
    path: 'hello',
    // the DialogEntryComponent creates a modal from the component in data
    component: DialogEntryComponent,
    data: {
      component: HelloComponent,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DialogRoutingModule {}

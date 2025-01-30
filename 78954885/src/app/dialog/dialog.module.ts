import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRoutingModule } from './dialog-routing.module';
import { HelloComponent } from '../hello/hello.component';
import { DialogEntryComponent } from './dialog-entry/dialog-entry.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HelloComponent, DialogEntryComponent],
  imports: [CommonModule, SharedModule, DialogRoutingModule],
})
export class DialogModule {}

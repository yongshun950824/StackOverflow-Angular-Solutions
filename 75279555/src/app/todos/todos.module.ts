import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToDosComponent } from '../add-to-dos/add-to-dos.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [AddToDosComponent],
})
export class TodosModule {}

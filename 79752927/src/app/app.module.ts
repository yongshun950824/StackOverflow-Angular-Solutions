import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from '../material-module';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { TableExpandableRowsExample } from './table-expandable-rows-example';
import { PascalCaseToSentencePipe } from './pascal-case-to-sentence.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    DragDropModule,
    CommonModule
  ],
  entryComponents: [TableExpandableRowsExample],
  declarations: [TableExpandableRowsExample, PascalCaseToSentencePipe],
  bootstrap: [TableExpandableRowsExample],
  providers: [],
})
export class AppModule {}

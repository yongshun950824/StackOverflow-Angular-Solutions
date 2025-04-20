import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';

export const BS_DROPDOWN_DEFAULT = {
  isAnimated: false,
  autoClose: true
};

import { DemoDropdownAnimatedComponent } from './ngx-bootstrap-demo.component';
@NgModule({
  declarations: [DemoDropdownAnimatedComponent],
  imports: [
    BsDropdownModule.forRoot(),

    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [
    {
      provide: BsDropdownConfig,
      useValue: BS_DROPDOWN_DEFAULT
    }
  ],
  entryComponents: [],
  bootstrap: [DemoDropdownAnimatedComponent]
})
export class AppModule {}

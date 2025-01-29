import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { NgbdModalComponent } from './modal-component';
import { MyModalComponent } from './my-modal/my-modal.component';

@NgModule({
  imports: [BrowserModule, NgbModule, HttpClientModule],
  declarations: [NgbdModalComponent, MyModalComponent],
  exports: [NgbdModalComponent],
  bootstrap: [NgbdModalComponent],
  entryComponents: [MyModalComponent],
  providers: [],
})
export class NgbdModalComponentModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [CommonModule, PortalModule, RouterModule, ModalModule.forRoot()],
  exports: [ModalModule],
})
export class SharedModule {
  constructor() {}
}

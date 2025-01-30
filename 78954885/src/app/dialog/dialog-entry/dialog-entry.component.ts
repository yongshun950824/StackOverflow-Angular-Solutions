import { ComponentType } from '@angular/cdk/portal';
import { Component, OnDestroy } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dialog-entry',
  template: ``,
})
export class DialogEntryComponent implements OnDestroy {
  protected _modalRef: BsModalRef;

  constructor(
    protected _modalService: BsModalService,
    protected _route: ActivatedRoute
  ) {
    this._modalRef = this._modalService.show(
      this._route.snapshot.data.component as ComponentType<any>
    );
  }

  ngOnDestroy() {
    this._modalRef.hide();
  }
}

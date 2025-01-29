import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MyModalComponent } from './my-modal/my-modal.component';

// export class NgbdModalContent {
//   @Input() name;

//   constructor(public activeModal: NgbModal) {}
// }

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './modal-component.html',
  styles: [
    `
      ::ng-deep .modal-dialog .modal-content  {
        /*background: linear-gradient(to bottom, white 50%, rgba(255, 255, 255, 0) 100%);*/
        /*opacity: 0.5;*/
        background: transparent;
        border: 0;

        .modal-header {
          background-color: white;
        }

        .modal-body {
          background: linear-gradient(to bottom, white 50%, rgba(255, 255, 255, 0) 100%);
        }
    }
    `,
  ],
  standalone: false
})
export class NgbdModalComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(MyModalComponent);
    modalRef.componentInstance.name = 'World';
  }
}

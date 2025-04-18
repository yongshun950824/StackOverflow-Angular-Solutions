import { Component, Input, OnInit } from '@angular/core';
import { BasePartFormatted } from '../models/model';

@Component({
  selector: 'modal-form',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() selectedParts: BasePartFormatted[];

  constructor() {}

  ngOnInit() {
    console.log(this.selectedParts);
  }
}

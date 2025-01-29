import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css'],
  standalone: false
})
export class MyModalComponent implements OnInit {
  name = ''
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}
}

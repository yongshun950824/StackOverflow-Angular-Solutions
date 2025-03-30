import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-person',
  templateUrl: './card-person.component.html',
  styleUrls: ['./card-person.component.css'],
})
export class CardPersonComponent implements OnInit {
  @Input() person!: any;

  constructor() {}

  ngOnInit() {}
}

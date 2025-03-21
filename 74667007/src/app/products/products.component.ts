import { Component, OnInit, Input } from '@angular/core';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input()
  public childForm!: FormGroup;

  constructor() {}
  static addListItem(): FormGroup {
    return new FormGroup({
      list_item_1: new FormGroup(''),
      list_item_2: new FormGroup(''),
    });
  }

  ngOnInit() {}
}

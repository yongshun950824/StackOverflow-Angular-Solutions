import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ValueService } from './value.service';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css'],
})
export class ValueComponent implements OnInit {
  valueDatas: any;
  startDate: any;

  constructor(
    private service: ValueService,
    private router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.valueDatas = this.service.valueDatas;
    this.startDate = this.service.startDate;
  }

  deleteItem(i: number) {
    this.valueDatas.splice(i, 1);
  }

  btnAjout(): void {
    this.router.navigateByUrl('/market/ajout');
  }
}

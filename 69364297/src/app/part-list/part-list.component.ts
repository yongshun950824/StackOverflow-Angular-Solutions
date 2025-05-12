import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasePartFormatted } from '../models/model';
import { PlanService } from '../services/plan.service';

@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.css'],
})
export class PartListComponent implements OnInit {
  partList$: Observable<BasePartFormatted[]>;
  selectedParts: BasePartFormatted[];
  flowID = 1;
  isOpened = false;

  constructor(private planService: PlanService) {}

  ngOnInit(): void {
    this.partList$ = this.planService.getParts(this.flowID);
  }
}

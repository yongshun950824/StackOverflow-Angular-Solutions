import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, NgbAccordionModule],
  template: `
  <div ngbAccordion *ngFor="let i of items">
  <div
    ngbAccordionItem
    #item="ngbAccordionItem"
    [collapsed]="false"
    class="item"
  >
    <div ngbAccordionHeader ngbAccordionToggle>{{ i.data }}</div>
    <div ngbAccordionCollapse>
      <div ngbAccordionBody>
        <ng-template>
          <div *ngIf="i.data === 'test1'">1</div>
          <div *ngIf="i.data === 'test2'">2</div>
          <div *ngIf="i.data === 'test3'">3</div>
        </ng-template>
      </div>
    </div>
  </div>
</div>
  `,
})
export class App {
  name = 'Angular';

  items = [
    {
      data: 'test1',
      item: [],
    },
    {
      data: 'test2',
      item: [],
    },
    {
      data: 'test3',
      item: [],
    },
  ];
}

bootstrapApplication(App);

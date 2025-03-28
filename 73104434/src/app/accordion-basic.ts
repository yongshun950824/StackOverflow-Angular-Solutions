import { Component, ViewChild } from '@angular/core';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-accordion-basic',
  templateUrl: './accordion-basic.html',
})
export class NgbdAccordionBasic {
  @ViewChild('acc') acc: NgbAccordion;

  toggleAcc() {
    // Solution 1: Provide panel id and toggle
    //this.acc.toggle('detailAcc');
    //console.log(this.acc.panels.map(x => x.id));

    // Solution 2: Iterate panels array to get panel id and toggle
    for (let panelId of this.acc.panels.map((x) => x.id)) {
      this.acc.toggle(panelId);
    }
  }
}

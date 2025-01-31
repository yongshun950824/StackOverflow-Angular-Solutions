import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-accordion-header',
  standalone: true,
  imports: [NgbAccordionModule,CommonModule],
  templateUrl: './accordion-header.html',
  encapsulation: ViewEncapsulation.None,
  styles: `
		.custom-header::after {
			content: none;
		}
	`,
})
export class NgbdAccordionHeader {
  onClick(disabled: boolean) {
    window.alert(!disabled ? 'Hi!' : 'This should never happen!');
  }

  items = [1,2,3,4];
 
}

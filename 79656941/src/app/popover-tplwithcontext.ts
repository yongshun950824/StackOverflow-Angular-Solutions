import { JsonPipe, NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgbPopover, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-popover-tplwithcontext',
	standalone: true,
	imports: [NgbPopoverModule, JsonPipe, NgIf],
	templateUrl: './popover-tplwithcontext.html',
})
export class NgbdPopoverTplwithcontext {
	name = 'World';

	@ViewChild('popover', { static: false }) popover: NgbPopover;

	openPopoverWithData() {
		const myContext = {
			id: 1,
			name: 'Test Template'
		};

		// Defensive: ensure popover closes before opening
		if (this.popover.isOpen()) {
			this.popover.close();
		}

		// Open popover with context
		setTimeout(() => {
			this.popover.open({ context: myContext }); // 👈 context passed here
		});
	}
}

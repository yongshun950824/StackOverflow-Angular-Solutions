import { Component, Input } from '@angular/core';

@Component({
  selector: 'snack-bar-overview-example',
  template: 'SnackbarComponent',
  styleUrls: ['snack-bar-overview-example.css']
})
export class SnackbarComponent {
  @Input() data: any;
}

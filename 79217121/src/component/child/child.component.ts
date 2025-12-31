import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  standalone: false,
})
export class ChildComponent implements OnChanges {
  @Input() myCounter!: number;

  ngOnChanges() {
    console.log('ngOnChanges');
  }
}

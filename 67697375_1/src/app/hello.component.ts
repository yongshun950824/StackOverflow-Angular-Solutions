import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: `./hello.component.html`,
  styleUrls: [`./hello.component.css`]
})
export class HelloComponent implements OnInit {
  @Input('data') data: any;
  @Input('index') index: number;

  isAccordionOpen: boolean;

  ngOnInit() {
    this.isAccordionOpen = this.index === 0;
    console.log(this.isAccordionOpen);
  }
}

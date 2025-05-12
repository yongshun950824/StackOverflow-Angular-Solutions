import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: `./hello.component.html`,
  styleUrls: [`./hello.component.css`]
})
export class HelloComponent implements OnInit {
  @Input('data') data: any;
  @Input('index') index: number;

  isCollapsed: boolean;

  ngOnInit() {
    this.isCollapsed = this.index !== 0;
  }
}

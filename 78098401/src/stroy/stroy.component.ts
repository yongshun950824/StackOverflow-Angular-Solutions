import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-stroy',
  standalone: true,
  imports: [],
  templateUrl: './stroy.component.html',
  styleUrl: './stroy.component.scss',
})
export class StroyComponent implements OnInit {
  @Input() text: string = '';
  @Input() img: string = '';
  constructor() {}
  ngOnInit(): void {}
}

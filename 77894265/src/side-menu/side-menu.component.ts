import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  standalone: true,
  imports: [RouterModule]
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
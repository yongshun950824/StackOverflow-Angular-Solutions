import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
  template: `
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" [routerLink]='["savedata"]'  routerLinkActive="active_route">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" [routerLink]='["datalist"]'  routerLinkActive="active_route" >List</a>
      </li>
    </ul>
  `,
  imports: [RouterLink, RouterLinkActive],
})
export class TopBarComponent {}

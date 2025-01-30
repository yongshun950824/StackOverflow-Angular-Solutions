import { Component } from '@angular/core';
import { TopBarComponent } from '../topbar.component';
import { SavedataComponent } from '../savedata/savedata.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-topbar></app-topbar>
    <section class="presentation">
        <!--<app-savedata></app-savedata>-->

        <router-outlet></router-outlet>
    </section>
  `,
  imports: [TopBarComponent, /*SavedataComponent,*/ RouterOutlet],
})
export class HomeComponent {}

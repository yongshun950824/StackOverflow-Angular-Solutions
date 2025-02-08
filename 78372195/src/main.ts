import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  Routes,
  provideRouter,
  RouterOutlet,
  RouterLink,
} from '@angular/router';
import 'zone.js';
import { DetailsComponent } from './details.component';
import { SomeComponent } from './some.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'some-component',
    component: SomeComponent,
  },
  {
    path: 'my-details',
    component: DetailsComponent,
    outlet: 'details',
  },
  
];

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [RouterOutlet, RouterLink],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});

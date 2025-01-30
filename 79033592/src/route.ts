import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SavedataComponent } from './savedata/savedata.component';
import { DatalistComponent } from './datalist/datalist.component';

const routeConfig: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'savedata', component: SavedataComponent },
      { path: 'datalist', component: DatalistComponent },
    ],
  },
];
export default routeConfig;

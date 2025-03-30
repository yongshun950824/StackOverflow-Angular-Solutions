import { Component, VERSION } from '@angular/core';
import {
  IconProp,
  IconPrefix,
  IconName,
} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  navbarData: {
    routeLink: string;
    iconfirst: IconPrefix;
    iconsecond: IconName;
    iconfull: IconProp;
    label: string;
  }[] = [
    {
      routeLink: 'dashboard',
      iconfirst: 'fas',
      iconsecond: 'star',
      iconfull: ['fas', 'star'],
      label: 'Dashboard',
    },
  ];

  expanded = false;
}

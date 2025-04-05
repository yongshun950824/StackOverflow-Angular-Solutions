import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedTab: string ;

  showSubmenu: any[] = [];
  showInfo: any[] = [];

  menus: any[] = [

    /* Administration */
    {
      class: 'bx bx-lock-alt',
      item: 'Administration',
      route: '/dashboard/administration',
      arrowDown: 'bx bx-chevron-down',
      arrowUp: 'bx bx-chevron-up',

      submenus: [
        {
          class: 'bx bx-key',
          item: 'Portfolio',
          route: '/administration/portfolio',
        },
        {
          class: 'bx bx-wallet',
          item: 'Corporate Action',
          route: '/administration/corporate-action',
        },
      ],
    },

  
    /* Market */
    {
      class: 'bx bx-chart',
      item: 'Market',
      route: '/dashboard/market',
      arrowDown: 'bx bx-chevron-down',
      arrowUp: 'bx bx-chevron-up',

      submenus: [
        {
          class: 'bx bx-coin-stack',
          item: 'Value',
          route: '/market/value',
        },
        {
          class: 'bx bx-line-chart',
          item: 'Indice',
          route: '/market/indice',
        },
       
      ],
    },
   
  ];

  constructor() { }

  ngOnInit() {}


  toggleMenu(index: number) {
    this.showSubmenu[index] = !this.showSubmenu[index];
  }

  toggleSubmenu(event: MouseEvent, item: any) {
    event.stopPropagation();
    this.showInfo[item] = !this.showInfo[item];
  }

}
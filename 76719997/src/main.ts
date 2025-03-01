import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ButtonModule, CheckboxModule, TableModule],
  template: `
  <p-table [value]="items" [(selection)]="selectedItems">
  <ng-template pTemplate="body" let-item>
  <tr [pSelectableRow]="item">
      <td>
           <p-tableCheckbox
            [pSelectableRow]="item"
            [value]="item"
            ></p-tableCheckbox>
     </td>
     <td class="cell-breakWord">
           {{ item.name }}
     </td>
     <td>{{ item.id }}</td>
     ...
  </tr>
  </ng-template>
  </p-table>
  <p-button (onClick)="onClick(selectedItems)">Button</p-button>
  `,
})
export class App {
  name = 'Angular';

  selectedItems: any[] = [];

  items: any[] = [
    {
      id: 1,
      name: 'Item 1',
    },
    {
      id: 2,
      name: 'Item 2',
    },
    {
      id: 3,
      name: 'Item 3',
    },
  ];

  onClick(selectedItems: any[]) {
    console.log(selectedItems);
  }
}

bootstrapApplication(App, {
  providers: [provideAnimations()],
});

import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule],
  template: `
  <ng-select [items]="UserData" [addTag]="addTagFn" [hideSelected]="true" [multiple]="true"
    bindLabel="name" class="ng-custom" appendTo="body" placeholder="User name" [(ngModel)]="selectedValues">
    <ng-template ng-option-tmp let-item="item" let-item$="item$" let-index="index">
      {{item.email}}
    </ng-template>
  </ng-select>


  {{ selectedValues | json }}
  `,
})
export class App {
  name = 'Angular';

  selectedValues = [];

  UserData: any[] = [
    //{ name: 'xyz', email: 'xyz@email.com' },
    //{ name: 'abc', email: 'abc@email.com' },
  ];

  UserDataNames = [
    { name: 'xyz', email: 'xyz@email.com' },
    { name: 'abc', email: 'abc@email.com' },
  ];

  ngOnInit() {
    // this.UserDataNames.forEach((c, i) => {
    //   this.UserData.push({ id: i, name: c.name, email: c.email });
    // });

    this.UserData = this.UserDataNames.map((c, i) => ({
      id: i,
      name: c.name,
      email: c.email,
    }));
  }

  addTagFn(name: string) {
    return { name: name, tag: true };
  }
}

bootstrapApplication(App);

import { Component, Input } from '@angular/core';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-with-the-ngmodelgroup-inside',
  template: `
    <div #group="ngModelGroup" [ngModelGroup]="groupName">
      <input type="string" ngModel name="firstName" />
      <input type="string" ngModel name="lastName" />
    </div>
  `,
  imports: [CommonModule, FormsModule],
  standalone: true,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm,
    },
  ],
})
export class ComponentWithNgModelGroupComponent {
  @Input() groupName: string = '';
}

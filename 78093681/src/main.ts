import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>

    <div>
      <input id="foo" type="radio" [formControl]="formControl" name="group1" [value]="true">
      <label for="foo">foo</label>
      <input id="bar" type="radio" [formControl]="formControl" name="group1" [value]="false">
      <label for="bar">bar</label>
    </div>

    <div>
      <input id="foox" type="radio" [formControl]="formControl2" name="group2" [value]="true">
      <label for="foox">foox</label>
      <input id="barx" type="radio" [formControl]="formControl2" name="group2" [value]="false">
      <label for="barx">barx</label>
    </div>
    {{formControl.value | json}}
    {{formControl2.value | json}}
  `,
})
export class App {
  name = 'Angular';

  formControl = new FormControl();
  formControl2 = new FormControl();
}

bootstrapApplication(App);

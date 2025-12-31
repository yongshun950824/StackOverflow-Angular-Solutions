import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { ComponentWithNgModelGroupComponent } from './ComponentWithNgModelGroupComponent.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: `main.html`,
  imports: [FormsModule, ComponentWithNgModelGroupComponent, JsonPipe],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);

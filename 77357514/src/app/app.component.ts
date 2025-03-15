import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  value: number = 0;
  values: number[] = [0, 100];

  updateRange() {
    this.values = [...this.values];
  }
}

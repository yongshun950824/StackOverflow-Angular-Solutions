import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  item = {
    isSelected: false,
    faceColor: 'red',
  };

  getIconStyle(isSelected: boolean, faceColor: string): string {
    return isSelected
      ? `element-face-${faceColor}-filled`
      : `element-face-${faceColor}`;
  }
}

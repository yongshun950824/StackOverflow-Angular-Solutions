import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [
    `
      :host ::ng-deep .p-password input {
        width: 15rem;
      }
    `
  ]
})
export class AppComponent {
  value1: string;

  value2: string;

  value3: string;

  value4: string;
}

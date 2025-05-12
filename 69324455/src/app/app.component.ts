import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  tasks = [
    {
      name: "Task 1",
      isDone: false
    },
    {
      name: "Task 2",
      isDone: false
    },
    {
      name: "Task 3",
      isDone: true
    }
  ]
}

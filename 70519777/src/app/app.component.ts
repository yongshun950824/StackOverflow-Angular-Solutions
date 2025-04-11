import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskService],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  tasks: any[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService
      .getTasks()
      .subscribe((tasks: any[]) => (this.tasks = tasks));
  }
}

import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { SliderComponent } from './slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    Clicking on second button changes state of 2nd and 3rd button when using as component<br><br>
    When using the button component directly, it works correctly<br><br>
    undone:
    @for (todo of undoneTodos; track todo.id) {
      <!-- <button (click)="toggle(todo)">{{todo.id}}: {{ todo.done }}</button> -->
      {{todo.id}}: <app-slider [id]="'undone-'+todo.id" [active]="todo.done" (activeChange)="toggle(todo)"></app-slider>
    }

    done:
    @for (todo of doneTodos; track todo.id) {
      {{todo.id}}: <app-slider [id]="'done-'+todo.id" [active]="todo.done" (activeChange)="toggle(todo)"></app-slider>
    }
  `,
  imports: [SliderComponent],
})
export class App {
  undoneTodos: Todo[] = [];
  doneTodos: Todo[] = [];

  private todos: Todo[] = [
    { id: 1, done: false },
    { id: 2, done: false },
    { id: 3, done: false },
  ];

  constructor() {
    this.buildTodos();
  }

  toggle(todo: Todo) {
    todo.done = !todo.done;

    this.buildTodos();
  }

  private buildTodos() {
    this.doneTodos = this.todos.filter((x) => x.done);
    this.undoneTodos = this.todos.filter((x) => !x.done);
  }
}

export interface Todo {
  id?: number;
  done: boolean;
}

bootstrapApplication(App);

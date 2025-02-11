import { Component, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  person: Person = {
    name: 'Max',
    surname: 'Mustermann',
  };

  person2: Person = undefined;

  showSomething(person: Person): string {
    if (!person) {
      return null;
    }
    return person.name + ' ' + person.surname;
  }
}

export class Person {
  name: string;
  surname: string;
}

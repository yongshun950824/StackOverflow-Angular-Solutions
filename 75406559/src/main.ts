import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, combineLatest, startWith } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
  <select [formControl]="selectedUserId">
  <option>Select a User</option>
  <option *ngFor="let user of users" [value]="user.id">{{ user.name }}</option>
</select>
<select [formControl]="denyListedUsers" multiple>
  <option *ngFor="let user of users" [value]="user.id">{{ user.name }}</option>
</select>
Allow deny listed users <input type="checkbox" [formControl]="allowDenyListedUsers" />
<button [disabled]="isDisabled$ | async">Submit</button>
  `,
})
export class App {
  users = [
    { name: 'Peter', id: 1 },
    { name: 'Paul', id: 2 },
    { name: 'Mary', id: 3 },
  ];

  denyListedUsers = new FormControl<number[]>([] as number[]);
  selectedUserId = new FormControl(null);
  allowDenyListedUsers = new FormControl(false);
  isDisabled$ = combineLatest([
    this.allowDenyListedUsers.valueChanges.pipe(startWith(false)),
    this.denyListedUsers.valueChanges.pipe(startWith([] as number[])),
    // This works too
    // this.denyListedUsers.valueChanges.pipe(),
    this.selectedUserId.valueChanges.pipe(
      startWith(null),
      map((id) => +id!)
    ),
  ]).pipe(
    map(
      ([allowDenyListed, denyList, selected]) =>
        !allowDenyListed && denyList!.includes(selected)
    )
  );
}

bootstrapApplication(App);

import 'zone.js/dist/zone';
import { Component, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  debounceTime,
  forkJoin,
  iif,
  map,
  mergeMap,
  Observable,
  of,
  reduce,
  startWith,
  switchMap,
  tap,
} from 'rxjs';

import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DataService } from './data.service';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
  ],
  providers: [DataService],
  template: `
  <input  type="text" placeholder="Enter title" aria-label="Number" matInput [formControl]="ctl"
    [matAutocomplete]="auto" >
  <mat-autocomplete #auto="matAutocomplete">
    <ng-container *ngFor="let option of list$ | async ; let i = index">
      <mat-option>
        {{option.id}}
      </mat-option>
    </ng-container>
  </mat-autocomplete>
  `,
})
export class App {
  ctl: FormControl = new FormControl();

  list$!: Observable<any[]>;
  keyword!: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.list$ = this.ctl.valueChanges.pipe(
      debounceTime(100),
      startWith(null),
      mergeMap((res: any) => {
        if (res) {
          this.keyword = res;
          return forkJoin([
            this.dataService.searchCustomer(res),
            this.dataService.searchItem(res),
            this.dataService.searchTask(res),
          ]).pipe(map(([a, ...b]) => a.concat(...b)));
        } else {
          return of([]);
        }
      })
    );
  }
}

bootstrapApplication(App, {
  providers: [provideAnimations(), provideHttpClient()],
});

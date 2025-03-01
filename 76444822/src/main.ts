import 'zone.js/dist/zone';
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  combineLatest,
  delay,
  forkJoin,
  Observable,
  of,
  ReplaySubject,
  Subject,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="input-wrapper" *ngFor="let i of rolesData">
  <input type="checkbox" name="{{i.role}}" id="{{i.role}}" class="selectedRole">
  <label for="{{i.role}}">{{i.role}}</label>
  </div>
  `,
})
export class App {
  rolesData$: Observable<any[]> = of([
    {
      role: 'Software Developer',
    },
  ]).pipe(delay(3000));

  isDataFetchedSubject: Subject<boolean> = new Subject<boolean>();
  isDataFetched$ = this.isDataFetchedSubject.asObservable();
  isViewRenderedSubject: Subject<boolean> = new Subject<boolean>();
  isViewRendered$ = this.isViewRenderedSubject.asObservable();

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  rolesData: any[] = [];

  ngOnInit() {
    this.rolesData$.subscribe((value: any[]) => {
      this.rolesData = value;

      this.isDataFetchedSubject.next(true);
      this.isDataFetchedSubject.complete();
    });

    forkJoin([this.isDataFetched$, this.isViewRendered$])
      .pipe(takeUntil(this.destroyed$))
      .subscribe(([flag1, flag2]) => {
        console.log('Observable is completed');

        if (flag1 && flag2) {
          // Create a delay function to fetch element until it is existed
          let checkElementExist = setTimeout((isExisted: boolean) => {
            if (isExisted) clearTimeout(checkElementExist);

            console.log(
              '(2) element',
              document.getElementById('Software Developer')
            );
          }, 500);
        }
      });
  }

  ngAfterViewInit() {
    console.log(
      'AfterViewInit element will be undefined due to observable is not completed'
    );
    console.log('(1) element', document.getElementById('Software Developer'));
  }

  ngAfterViewChecked() {
    this.isViewRenderedSubject.next(true);
    this.isViewRenderedSubject.complete();
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}

bootstrapApplication(App);

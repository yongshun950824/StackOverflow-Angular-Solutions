import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Observable, combineLatest, delay, forkJoin, merge, of, switchMap } from 'rxjs';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `./main.html`,
  imports: [AsyncPipe],
})
export class App {
  name = 'Angular';

  test$ = of('Test').pipe(delay(500));
  anotherOne$ = of('anotherOne').pipe(delay(1500));

  // combine$: Observable<any> = combineLatest(
  //   [this.test$, this.anotherOne$],
  //   (ob1, ob2) => {
  //     console.log("ob1", ob1)
  //     console.log("ob2", ob2)
  //     return {
  //       test: ob1,
  //       anotherTest: ob2,
  //     };
  //   }
  // );
}

bootstrapApplication(App);

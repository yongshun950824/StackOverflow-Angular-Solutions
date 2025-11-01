import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { delay, exhaustMap, finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  array: any[] = [];
  sources: any[] = [
    {
      id: 1,
      name: 'test1',
    },
    {
      id: 2,
      name: 'test2',
    },
    {
      id: 3,
      name: 'test1',
    },
    {
      id: 4,
      name: 'test2',
    },
    {
      id: 5,
      name: 'test1',
    },
    {
      id: 6,
      name: 'test2',
    },
    {
      id: 7,
      name: 'test1',
    },
    {
      id: 8,
      name: 'test2',
    },
    {
      id: 9,
      name: 'test1',
    },
    {
      id: 10,
      name: 'test2',
    },
    {
      id: 11,
      name: 'test1',
    },
    {
      id: 12,
      name: 'test2',
    },
    {
      id: 13,
      name: 'test1',
    },
    {
      id: 14,
      name: 'test2',
    },
    {
      id: 15,
      name: 'test1',
    },
    {
      id: 16,
      name: 'test2',
    },
    {
      id: 17,
      name: 'test1',
    },
    {
      id: 18,
      name: 'test2',
    },
    {
      id: 19,
      name: 'test1',
    },
    {
      id: 20,
      name: 'test2',
    },
    {
      id: 21,
      name: 'test1',
    },
    {
      id: 22,
      name: 'test2',
    },
    {
      id: 23,
      name: 'test1',
    },
    {
      id: 24,
      name: 'test1',
    },
    {
      id: 25,
      name: 'test2',
    },
    {
      id: 26,
      name: 'test1',
    },
    {
      id: 27,
      name: 'test2',
    },
    {
      id: 28,
      name: 'test1',
    },
    {
      id: 29,
      name: 'test2',
    },
    {
      id: 30,
      name: 'test2',
    },
    {
      id: 31,
      name: 'test1',
    },
    {
      id: 32,
      name: 'test2',
    },
    {
      id: 33,
      name: 'test2',
    },
  ];

  isLoading = false;

  readonly pageSize = 10;
  readonly throttle = 33;

  loadSubject = new Subject<void>();

  constructor() {}

  ngOnInit(): void {
    this.loadSubject
      .pipe(
        exhaustMap(() => {
          this.isLoading = true;
          console.log('this.sources.length', this.sources.length);

          return this.loadItems(this.array.length, this.pageSize).pipe(
            tap((items) => (this.array = [...this.array, ...items])),
            finalize(() => (this.isLoading = false))
          );
        })
      )
      .subscribe();

    this.loadSubject.next();
  }

  onScrollDown() {
    console.log(this.throttle + '==' + this.array.length);
    if (this.throttle != this.array.length) {
      console.log(this.throttle + '====' + this.array.length);
      this.loadSubject.next();
    }
  }

  private loadItems(
    beginIndex: number,
    amountToLoad: number
  ): Observable<string[]> {
    //console.log('loadItems()');

    const items: any[] = [];

    for (let i = beginIndex; i < beginIndex + amountToLoad; i++) {
      console.log(i);
      this.sources[i] && items.push(this.sources[i]);
    }

    // Alternative: Exit the loop when `i` exceeds `sources.length`
    // for (
    //   let i = beginIndex;
    //   i < beginIndex + amountToLoad && i < this.sources.length;
    //   i++
    // ) {
    //   console.log(i);
    //   items.push(this.sources[i]);
    // }

    //console.log(items);
    return of(items).pipe(delay(1000));
  }
}

import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { map, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

/* Existing type */
type Data = { prop1: string; prop2: string }[];

interface MyInterface {
  prop1: string;
  data: Data;
}

type DataExtended = Data &
  {
    newValue: string;
  }[];

interface MyInterfaceExtended extends MyInterface {
  data: DataExtended;
}

/* New types */
// type Data = { prop1: string; prop2: string };

// interface MyInterface {
//   prop1: string;
//   data: Data[];
// }

// type DataExtended = Data & {
//   newValue: string;
// };

// interface MyInterfaceExtended extends MyInterface {
//   data: DataExtended[];
// }

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    {{ (myData$ | async) | json }}
  `,
  imports: [CommonModule],
})
export class App {
  name = 'Angular';

  myData$: Observable<MyInterfaceExtended>;

  constructor(/*private myService:myservice*/) {
    /* Solution 1 with existing types */
    this.myData$ = of({
      data: [
        {
          prop1: 'Prop 1',
          prop2: 'Prop 2',
        },
      ],
    } as MyInterface) // Replace observable with this.myService.get()
      .pipe(
        map((response: any) => {
          let newResponse: MyInterfaceExtended = response;

          newResponse.data = newResponse.data.map((x) => ({
            ...x,
            newValue: 'new',
          }));

          return newResponse;
        })
      );

    /* Solution 2 with new types */
    // this.myData$ = of({
    //   data: [
    //     {
    //       prop1: 'Prop 1',
    //       prop2: 'Prop 2',
    //     },
    //   ],
    // } as MyInterface) // Replace observable with this.myService.get()
    //   .pipe(
    //     map(
    //       (response: MyInterface) =>
    //         ({
    //           ...response,
    //           data: response.data.map(
    //             (x: Data) =>
    //               ({
    //                 ...x,
    //                 newValue: 'new',
    //               } as DataExtended)
    //           ),
    //         } as MyInterfaceExtended)
    //     )
    //   );
  }
}

bootstrapApplication(App);

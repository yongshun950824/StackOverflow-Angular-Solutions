import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { provideAnimations } from '@angular/platform-browser/animations';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [CommonModule, MatTableModule, MatDividerModule],
})
export class App {
  ob$: Observable<any[]> = of([
    {
      name: '51399',
      series: [
        {
          name: '0-30 dni',
          value: 12026.899999999999636202119290828704833984375,
        },
        {
          name: '30-60 dni',
          value: 1293.259999999999990905052982270717620849609375,
        },
        {
          name: '60-90 dni',
          value: 0,
        },
        {
          name: '90-180 dni',
          value: 629.98000000000001818989403545856475830078125,
        },
        {
          name: '180+ dni',
          value: 129.729999999999989768184605054557323455810546875,
        },
      ],
    },
  ]);

  displayedColumnsTableOne: string[] = ['name', 'series'];
  terjatveTable!: any[];
  errorMessage = false;

  ngOnInit() {
    this.getSingleCustomerTerjatveChartData();
  }

  getSingleCustomerTerjatveChartData() {
    //const id = Number(this.route.snapshot.paramMap.get('id'));
    //this.customerService.getSingleCustomerTerjatveChartData(id)

    this.ob$.subscribe(
      (data: any) => {
        if (data.error) {
          this.errorMessage = true;
        } else {
          this.terjatveTable = data.reduce((acc: any[], cur: any) => {
            cur.series.forEach((x: any) => {
              acc.push({
                ...cur,
                series: x,
              });
            });

            return acc;
          }, [] as any[]);
        }
      },
      (error) => {
        console.log('Error', error);
        //this.terjatveTable = null;
        this.errorMessage = error.error === 'No data';
      }
    );
  }
}

bootstrapApplication(App, {
  providers: [provideAnimations()],
});

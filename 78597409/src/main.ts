import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { LoadingService } from './app/loadingService/loading.service';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { concatMap, delay } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { SpinnerComponent } from './app/spinner/spinner.component';
import {
  NetworkInterceptor,
  networkInterceptorFn,
} from './app/network/network.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, SpinnerComponent],
  template: `
  @if (loading$ | async) {
  <ng-container>
    <div class="overlay"></div>
    <app-spinner></app-spinner>
  </ng-container>
  }
    <button (click)="fetchMultipleData()">Fetch Multiple Data</button>
  `,
})
export class App {
  name = 'Angular';
  loading$ = this.loadingService.loading$;

  constructor(
    private loadingService: LoadingService,
    private http: HttpClient
  ) {}

  fetchMultipleData() {
    this.http
      .get('https://api.github.com/users/thisiszoaib')
      .pipe(delay(3000))
      .subscribe((res) => {
        console.log(res);
      });

    this.http
      .get('https://api.github.com/users/thisiszoaib')
      .pipe(
        delay(3000),
        concatMap(() => this.http.get('https://api.github.com/users'))
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}

bootstrapApplication(App, {
  providers: [
    // For using HttpInterceptorFn
    /*
    provideHttpClient(
      withInterceptors([networkInterceptorFn])
    ),
    */
    // For using traditional HttpInterceptor class

    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true,
    },
  ],
});

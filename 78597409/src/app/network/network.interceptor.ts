import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { LoadingService } from '../loadingService/loading.service';
import { Observable, finalize } from 'rxjs';
import { Injectable, inject } from '@angular/core';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {
  totalRequests = 0;
  requestsCompleted = 0;

  constructor(private loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loadingService.show();
    this.totalRequests++;

    return next.handle(request).pipe(
      finalize(() => {
        this.requestsCompleted++;

        console.log(this.requestsCompleted, this.totalRequests);

        if (this.requestsCompleted === this.totalRequests) {
          this.loadingService.hide();
          this.totalRequests = 0;
          this.requestsCompleted = 0;
        }
      })
    );
  }
}

export const networkInterceptorFn: HttpInterceptorFn = (req, next) => {
  let totalRequests = 0;
  let requestsCompleted = 0;

  const loadingService = inject(LoadingService);
  console.log('loadingService', loadingService);

  loadingService.show();
  totalRequests++;

  return next(req).pipe(
    finalize(() => {
      requestsCompleted++;

      console.log(requestsCompleted, totalRequests);

      if (requestsCompleted === totalRequests) {
        loadingService.hide();
        totalRequests = 0;
        requestsCompleted = 0;
      }
    })
  );
};

import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    ConfigService,
    //...
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      multi: true,
      deps: [ConfigService, HttpClient],
    },
  ],
};

export function initializeAppFactory(init: ConfigService, http: HttpClient) {
  return () => init.load();
}

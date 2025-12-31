import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideHighcharts,
  providePartialHighcharts,
} from 'highcharts-angular';
import { provideHttpClient } from '@angular/common/http';

//import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    //provideRouter(routes),
    provideHighcharts(),
    provideHttpClient(),
    providePartialHighcharts({
      modules: () => [
        import('highcharts/esm/modules/map'),
        import('highcharts/esm/modules/tiledwebmap'),
      ],
    }),
  ],
};

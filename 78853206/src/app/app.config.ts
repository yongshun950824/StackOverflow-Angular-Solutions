import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormlyFieldAutocomplete } from '../formly-types/autocomplete-type';
import { FormlyModule } from '@ngx-formly/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom([
      FormlyModule.forRoot({
        types: [
          {
            name: 'autocomplete',
            component: FormlyFieldAutocomplete,
            wrappers: ['form-field'],
          },
        ],
      }),
    ]),
  ],
};

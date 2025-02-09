import '@angular/localize/init';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { VERSION as CDK_VERSION } from '@angular/cdk';
import {
  VERSION as MAT_VERSION,
  MatNativeDateModule,
} from '@angular/material/core';
import { TableBasicExample } from './example/table-basic-example';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BackendService } from './backend.service';
import { ContactListComponent } from './contact-list.component';

/* eslint-disable no-console */
console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);

bootstrapApplication(ContactListComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    //importProvidersFrom(MatNativeDateModule),
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(BackendService, {
        dataEncapsulation: false,
      })
    ),
  ],
}).catch((err) => console.error(err));

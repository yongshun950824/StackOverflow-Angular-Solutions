import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {
  HttpBackend,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { AppSettings } from './appsettings';
import { IApplicationInfo } from './application-info';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent],
  providers: [
    {
      provide: AppSettings,
      useValue: {
        appInfoApi: '/assets/data.json',
      },
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [HttpBackend, AppSettings],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

function initApp(
  http: HttpBackend,
  settings: AppSettings
): () => Observable<any> {
  console.log('INITIALIZING APP');

  var appInfoCall = () =>
    new HttpClient(http).get<IApplicationInfo>(settings.appInfoApi).pipe(
      tap((data) => {
        console.log('APP INITIALIZATION COMPLETE');
        settings.appInfo = data;
      })
    );
  return appInfoCall;
}

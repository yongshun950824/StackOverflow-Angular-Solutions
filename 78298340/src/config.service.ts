import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private http = inject(HttpClient);

  private _config: any;
  private _user: any;

  public getConfigUrl(key: string): string {
    return this._config.urls[key];
  }

  public load(): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log('Resolve promise load()');
      this._user = {}; //<-- normally a request to my node-express server
      this._config = {
        urls: {
          test: 'www.test.com',
        },
      };
      resolve(true);
    });
  }
}

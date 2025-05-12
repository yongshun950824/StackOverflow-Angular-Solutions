import { Injectable } from '@angular/core';
import { Logdetay } from './logdetay.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogdetayService {
  formData: Logdetay = {
    Message: null,
    CreateDate: null,
    Logtype: null,
    Int: null
  };

  readonly rootUrl = 'https://localhost:44370/api';
  public list: Logdetay[];
  constructor(private httpclient: HttpClient) {}

  postlogDetay(formData: Logdetay) {
    return this.httpclient.post(this.rootUrl + '/Logtbs', formData);
  }
  refreshList() {
    // this.httpclient
    //   .get(this.rootUrl + '/Logtbs')
    //   .toPromise()
    //   .then(res => (this.list = res as Logdetay[]));

    this.httpclient
      .get('/assets/data.json')
      .toPromise()
      .then(res => (this.list = res as Logdetay[]));
  }
}

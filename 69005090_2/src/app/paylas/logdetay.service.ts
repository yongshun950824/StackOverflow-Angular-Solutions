import { Injectable } from '@angular/core';
import { Logdetay } from './logdetay.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  list: Logdetay[];
  constructor(private httpclient: HttpClient) {}

  postlogDetay(formData: Logdetay) {
    return this.httpclient.post(this.rootUrl + '/Logtbs', formData);
  }
  refreshList(): Observable<Logdetay[]> {
    // return this.httpclient
    //   .get<Logdetay[]>(this.rootUrl + '/Logtbs');

    return this.httpclient.get<Logdetay[]>('/assets/data.json');
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  GetLastFour(): Observable<any[]> {
    return this.http.get<any[]>('/assets/data.json');
  }
}
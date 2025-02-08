import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  delay,
  lastValueFrom,
  of,
  tap,
} from 'rxjs';

export class FormData {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private jsonFormData$: BehaviorSubject<FormData> =
    new BehaviorSubject<FormData>(null!);
  private jsonPath: string = '';

  constructor(private http: HttpClient) {}

  getJsonFormData(): Observable<FormData> {
    if (!this.jsonFormData$.getValue()) {
      return this.loadJsonFormData();
    }

    return this.jsonFormData$.asObservable();
  }

  private loadJsonFormData() {
    let ob$ = of({
      prop1: 'Value Prop 1',
      prop2: 2,
    }).pipe(delay(1500)); // Dummy observable, Replace with //return this.http.get(this.jsonPath)

    return ob$.pipe(
      tap((formData: any) => {
        this.jsonFormData$.next(formData);
      })
    );
  }
}

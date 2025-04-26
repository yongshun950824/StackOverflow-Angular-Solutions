import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeEventService {
  private event$: BehaviorSubject<
    keyof typeof EVENT | null
  > = new BehaviorSubject(null as keyof typeof EVENT | null);

  setEvent(event: keyof typeof EVENT) {
    this.event$.next(event);
  }

  getEvent() {
    return this.event$.asObservable();
  }
}

export enum EVENT {
  contact,
  profile
}

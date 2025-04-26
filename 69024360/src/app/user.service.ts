import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  matchCurrentPassword(userId: string, value: string): Observable<any> {
    let currentPassword = '123456';
    return of({
      isExecute: currentPassword == value
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Users } from './users';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Users> {
    // `https://yapi.yementrack.com.ye/panel/user/list`
    //myHeader = myHeader.set('id', '123456');
    return this.http
      .get<Users>(`/assets/data.json`)
      .pipe(tap((users) => console.log(users)));
  }
}

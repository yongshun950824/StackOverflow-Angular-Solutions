import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private http: HttpClient) {}

  getMembers() {
    return this.http.get<any[]>('/assets/data.json');
  }

  getMembers2() {
    return this.http.get<any[]>('/assets/data.json').pipe(
      map((items: any[]) =>
        items.map(item => {
          return {
            ...item,
            id: item.memberId,
            fullName: item.firstName + ' ' + item.lastName
          };
        })
      )
    );
  }
}

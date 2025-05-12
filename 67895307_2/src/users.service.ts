import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ETAB } from './users';

@Injectable()
export class UserService {

  constructor() {

  }

  getdataEtab(): Observable<any> {
    //return this.http.get<any>('http://localhost:8020/survey/etablissement/')

    return of(ETAB);
  }  
}


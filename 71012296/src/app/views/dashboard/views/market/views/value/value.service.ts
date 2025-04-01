import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  startDate = new Date("");

  valueDatas = [
    { 
      indice : "AED / EUR",
      place : "Euronext Amsterdam",
      valeur : 11345.6145,
      variation : 0.31,
      startDate : "2019-09-06",

    },
    { 
      indice : "AED / USD",
      place : "Euronext Brussel",
      valeur : 17485.3441,
      variation : -0.95,
      startDate : "2019-11-04",

    },
    { 
      indice : "AED / EUR",
      place : "Euronext London",
      valeur : 1452.4178,
      variation : -2.36,
      startDate : "2019-04-01",
    },
    { 
      indice : "AED / EUR",
      place : "Euronext Paris",
      valeur : 1253.4472,
      variation : 2.36,
      startDate : "2019-01-07",
    },
  ]

  constructor() { }

  getValue(index: number) {
    if(this.valueDatas[index]){
      return this.valueDatas[index];
    }
    return false;
  }

}



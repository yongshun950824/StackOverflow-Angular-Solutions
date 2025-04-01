import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndiceService {

  startDate = new Date("");

  indiceDatas = [
    {
      indice : "Nodata",
      place : "Euronext Amsterdam",
      cours : 762.047895,
      variation : "-9.30",
      startDate : "2019-09-06",
      heure : "12:36",
    },
    {
      indice : "Nodata",
      place : "Euronext Amsterdam",
      cours : 1075.125664,
      variation : "-0.54",
      startDate : "2019-04-04",
      heure : "12:36",
    },
    {
      indice : "Nodata",
      place : "Euronext Amsterdam",
      cours : 1434.056981,
      variation : "8.50",
      startDate : "2019-07-01",
      heure : "12:36",
    },
    {
      indice : "Nodata",
      place : "Euronext Amsterdam",
      cours : 4116.511121,
      variation : "4.60",
      startDate : "2019-02-06",
      heure : "12:36",
    },
    {
      indice : "Nodata",
      place : "Euronext Amsterdam",
      cours : 7075.111117,
      variation : "9.50",
      startDate : "2019-04-07",
      heure : "12:36",
    },


  ]

  constructor() { }
}
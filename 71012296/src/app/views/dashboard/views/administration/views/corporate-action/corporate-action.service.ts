import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorporateActionService {

  startDate = new Date("");

  corporateDatas = [
    {
      compte : "TA1780",
      intitule : "LEFEBVRE CHRISTINE",
      type : "Offre Publique d'Echange",
      libelle : "CIE DU BOIS SAUVAGE",
      quantite : 150.001485,
      startDate : "2019-09-06",
    },
 
  {
    compte : "RA0278",
    intitule : "LEFEBVRE CHRISTINE",
    type : "Offre Publique d'Acquisition",
    libelle : "SOLVAY BE",
    quantite : 46.896985,
    startDate : "2019-04-07",
   
  },
  {
    compte : "RB9276",
    intitule : "VANTOMME LAURETTE",
    type : "Offre Publique d'Acquisition",
    libelle : "SOLVAY BE",
    quantite : 22.123654,
    startDate : "2019-09-05",
  },

  ]

  constructor() { }
}
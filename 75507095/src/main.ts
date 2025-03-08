import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
})
export class App {
  name = 'Angular';

  MET = [
    {
      LABEL: 'WILHELMSEN',
      ISINCODE: 'NO0010571698',
      RECORD_DATE: '2022-09-16',
      EVENT_DATE: '2022-09-30',
      EVENT_TYPE: 'AG Ordinaire',
      SOLDE: 15000.0,
      NUMERO_AG: 10642,
      CREAT_DATE: '2022-04-01',
      MOD_DATE: '2022-04-01',
      EMETTEUR: '408659',
      DEPOSITAIRE: 'CA000005775300',
      ISCONFIRMED: 1,
      ISSRD2ELIGIBLE: 1,
      ADRESSE1: 'Strand 20',
      ADRESSE2: '',
      LOCALITE: 'LYS',
      CODEPOSTAL: 0,
      PAYS: 'NOR',
      STATUTAG: 9,
      URL: '',

      RESOLUTION: [
        {
          REF: '01',
        },
      ],
    },
  ];
}

bootstrapApplication(App);

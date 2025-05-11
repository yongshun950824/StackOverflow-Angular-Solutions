import { HttpClient } from '@angular/common/http';
import { Byte } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable()
export class PokayokesService {
  listPokayokes!: Pokayoke[];

  constructor(private http: HttpClient) {}

  getPokayokes() {
    this.http
      .get('/assets/data.json')
      .toPromise()
      .then(data => {
        this.listPokayokes = data as Pokayoke[];
        console.log(this.listPokayokes);
      });
  }
}

export class Pokayoke {
  id?: number;
  active?: boolean;
  codeEnabled?: string;
  codeDisabled?: string;
  codeSupervision?: string;
  name?: string;
  messageEnabled?: string;
  messageDisabled?: string;
  messageSupervision?: string;
  localization?: string;
  image?: Byte[];
  actualState?: string;
  actualSuvervisionState?: string;
  dateLastSupervision?: Date;
}


export class visionCompacteDTOs {
  collaborator!: string;
  cetCP!: number;
  cetRTT!: number;
  perteRTT!: number;
  perteCP!: number;
  mnth: Month[] = [];
}

export class Month {
  month!: string;
  compteurFDP: Array<compteurFDP> = [];
  prisedemois: Array<prisesDuMois> = [];
  cmpteurfindumois: Array<compteurFinDuMois> = [];
}

export class compteurFDP {
  cp!: string;
  rtts!: number;
  rtte!: number;
}

export class prisesDuMois {
  cp!: number;
  rtts!: number;
  rtte!: number;
}

export class compteurFinDuMois {
  cp!: number;
  rtts!: number;
  rtte!: number;
  Somme!: number;
}

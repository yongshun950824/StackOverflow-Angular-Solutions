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
  solde!: number;
}

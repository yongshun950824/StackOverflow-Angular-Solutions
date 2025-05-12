export interface ICompany {
  id: number;
  name: string;
  website: string;
  country: ICountry;
}

export interface ICountry {
  id: number;
  name: string;
}

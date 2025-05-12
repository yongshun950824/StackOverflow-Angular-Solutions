export interface IResponse<T> {
  message: string;
  error: boolean;
  code: number;
  results: T;
}

export interface ICountries {
  countries: ICountry[];
}

export interface ICountry {
  name: string;
  id: number;
}

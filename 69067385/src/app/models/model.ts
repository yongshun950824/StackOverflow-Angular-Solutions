export class EmployeeResponse {
  results!: { employee: IEmployee };
}

export interface IEmployee {
  id?: number;
  first_name: string;
  other_name: string;
  last_name: string;
  licence_number?: string;
}

export interface ILicence {
  id: number;
  licence_number: string;
}

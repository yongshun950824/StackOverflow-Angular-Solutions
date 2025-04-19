export interface IResponse<T> {
  message: string;
  error: boolean;
  code: number;
  results: T;
}

export interface IEmployees {
  employees: IEmployee[];
}

export class EmployeeResponse {
  results!: { employee: IEmployee };
}

export interface IEmployee {
  id?: number;
  current_residential_address?: string;
  employeephones?: IContact[];
}

export interface IContact {
  id?: number;
  phone_number: string;
  phone_type_id?: number;
  phonetypes?: { id: number; type_name: string };
  is_primary_contact_number?: boolean;
}

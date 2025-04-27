import { IStudent } from './student.model';

export interface IResponse<T> {
  results: T;
}

export class StudentResponse {
  results: { student: IStudent };
}

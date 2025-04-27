import { IStudent } from './student.model';

export interface IResponse<T> {
  results: T;
}

export class StudentKeyValuePair {
  [student: string]: IStudent;
}

export class StudentResponse implements IResponse<StudentKeyValuePair> {
  results: StudentKeyValuePair;
}

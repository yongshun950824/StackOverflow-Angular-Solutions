export class Employee {
  //implements IEmployee
  public birth_date: string;
  //public designations: IDesignation;
  public emp_no: string;
  public first_name: string;
  public gender: string;
  public hire_date: string;
  public id: string;
  public last_name: string;
  //public salaries: ISalary;

  constructor(
    birth_date: string,
    //designations: IDesignation,
    emp_no: string,
    first_name: string,
    gender: string,
    hire_date: string,
    id: string,
    last_name: string
    //salaries: ISalary,
  ) {
    this.birth_date = birth_date;
    //this.designations = designations;
    this.emp_no = emp_no;
    this.first_name = first_name;
    this.gender = gender;
    this.hire_date = hire_date;
    this.id = id;
    this.last_name = last_name;
    //this.salaries = salaries;
  }
}

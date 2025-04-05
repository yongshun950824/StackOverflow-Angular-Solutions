export interface Office {
  id: number;
  description: string;
  phone: string;
  enabled: number;
}

export interface Authority {
  authority: string;
}

export interface UserIn {
  username: string;
  password: string;
  enabled: number;
  firstname: string;
  lastname: string;
  asm: number;
  office: number;
  authorities: Authority[];
}

export interface Application {
  id: number;
  date: Date;
  time: Date;
  office: Office;
  officeDescr: string;
  reason: number;
  reasonDescr: string;
  file: string;
  status: number;
  userIn: UserIn;
  commentIn?: any;
  userValid?: any;
  commentValid?: any;
  userApproved?: any;
  commentApproved?: any;
}

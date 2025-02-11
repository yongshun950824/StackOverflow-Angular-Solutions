export interface Student {
  id: number;
  name: string;
  schoolId: number;
  carId: number;
}

export interface School {
  id: number;
  name: string;
  location: string;
}

export interface Car {
  id: number;
  make: string;
  model: string;
}

export interface StudentWithSchoolCarData extends Student {
  school: School;
  car: Car;
}

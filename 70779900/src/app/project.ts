export class Project {
  id?: any;
  title?: string;
  description?: string;
  accessCode?: string;
  createdAt?: Date;
  updatedAt?: Date;
  sprints: Sprint[];
}

export interface Sprint {
  id: number;
  title: string;
  releaseDate: Date;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  projectId: number;
  specifications: Specification[];
}

export interface Specification {
  id: number;
  title: string;
  description: string;
  duration: number;
  status: number;
  createdAt: Date;
  updatedAt: Date;
  sprintId: number;
}

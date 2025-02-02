import { TaskStatus } from './status';

export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

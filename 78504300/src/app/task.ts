import { Subtask } from './subtask';

export interface Task {
  id: number;
  title: string;
  subtasks: Subtask[];
}

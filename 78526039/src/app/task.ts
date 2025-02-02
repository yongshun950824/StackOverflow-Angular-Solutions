import { Contact } from './contact';
import { TaskStatus } from './status';
import { Subtask } from './subtask';

export interface Task {
  id: number;
  title: string;
  subtasks: Subtask[];
  contacts: Contact[];
  status: TaskStatus;
}

import { TaskStatus } from './status';

export const TASK_STATUSES: { [key: string]: TaskStatus } = {
  TO_DO: {
    key: 'TO_DO',
    value: 'To Do',
  },
  DONE: {
    key: 'DONE',
    value: 'Done',
  },
};

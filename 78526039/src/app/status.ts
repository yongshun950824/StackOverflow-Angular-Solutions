export interface TaskStatus {
  key: string;
  value: string;
}

export const TASK_STATUSES: { [key: string]: TaskStatus } = {
  TO_DO: {
    key: 'TO_DO',
    value: 'To Do',
  },
  IN_PROGRESS: {
    key: 'IN_PROGRESS',
    value: 'In Progress',
  },
  DONE: {
    key: 'DONE',
    value: 'Done',
  },
};

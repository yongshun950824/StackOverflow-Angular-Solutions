export interface Event {
  id: number;
  description: string;
  start_time: Date | null;
  end_time: Date | null;
  cell: string | null;
  task_type: string | null;
}

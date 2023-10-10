export interface Task {
  id: string;
  name: string;
  description?: string;
  done: boolean;
  created_at: Date;
}

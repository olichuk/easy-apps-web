export interface Task {
  id: string;
  title: string;
  description: string;
  done: boolean;
  files?: File[];
}

export interface TasksState {
  tasks: Task[];
  isLoading: boolean;
  isError: string | null;
  currentTask: Task | null;
}

export interface TasksPayload {
  title: string;
  description: string;
  files?: File[];
  onSuccess?: () => void;
}

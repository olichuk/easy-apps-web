export interface Task {
  _id: string;
  title: string;
  description: string;
  done: boolean;
  files?: (File | string)[];
}

export interface TasksState {
  tasks: Task[];
  isLoading: boolean;
  isError: string | null;
  currentTask: Task | null;
  page: number;
  totalCount: number;
  tasksPerPage: number;
  hasMore: boolean;
}

export interface TasksPayload {
  title: string;
  description: string;
  files?: File[];
  onSuccess?: () => void;
}
export interface CommonTasks {
  page: number;
  tasksPerPage: number;
}
export type CommonTasksParams = {
  page: number;
  tasksPerPage: number;
};
export type StatusPayload = {
  _id: string;
  done: boolean;
};

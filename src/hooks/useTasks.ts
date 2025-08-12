import { useDispatch, useSelector } from "react-redux";
import {
  createTaskAsyncAction,
  deleteTaskAsyncAction,
  getTasksAsyncAction,
} from "../store/asyncActions/tasksAsyncActions";
import { TRootState, TAppDispatch } from "../store";
import { Task } from "../interfaces/tasks";

const useTasks = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const tasks = useSelector<TRootState, Task[]>(
    (state: TRootState) => state.tasks.tasks
  );
  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.tasks.isLoading
  );
  const error = useSelector<TRootState, string | null>(
    (state: TRootState) => state.tasks.isError
  );
  const getAllTasks = () => {
    dispatch(getTasksAsyncAction());
  };
  const deleteTask = (id: string) => {
    dispatch(deleteTaskAsyncAction(id));
  };
  const createTask = (
    title: string,
    description: string,
    files: File[],
    onSuccess?: () => void
  ) => {
    dispatch(createTaskAsyncAction({ title, description, files, onSuccess }));
  };

  return {
    tasks,
    loading,
    error,
    getAllTasks,
    deleteTask,
    createTask,
  };
};

export default useTasks;

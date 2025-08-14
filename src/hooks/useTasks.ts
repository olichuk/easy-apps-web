import { useDispatch, useSelector } from "react-redux";
import {
  createTaskAsyncAction,
  deleteTaskAsyncAction,
  getTaskByIdAsyncAction,
  getTasksAsyncAction,
} from "../store/asyncActions/tasksAsyncActions";
import { TRootState, TAppDispatch } from "../store";
import { Task } from "../interfaces/tasks";

const useTasks = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const tasks = useSelector<TRootState, Task[]>(
    (state: TRootState) => state.tasks.tasks
  );
  const currentTask = useSelector<TRootState, Task | null>(
    (state: TRootState) => state.tasks.currentTask
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
  const getTaskById = (id: string) => {
    dispatch(getTaskByIdAsyncAction(id));
  };
  return {
    tasks,
    loading,
    currentTask,
    error,
    getAllTasks,
    deleteTask,
    createTask,
    getTaskById,
  };
};

export default useTasks;

import { useDispatch, useSelector } from "react-redux";
import { getTasksAsyncAction } from "../store/asyncActions/tasksAsyncActions";
import { TRootState, TAppDispatch } from "../store";
import { Task } from "../store/reducers/tasksSlice";

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

  return {
    tasks,
    loading,
    error,
    getAllTasks,
  };
};

export default useTasks;

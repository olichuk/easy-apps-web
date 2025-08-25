import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TRootState } from "../store";
import { getCommonTasksAsyncAction } from "../store/asyncActions/commonTaskAsyncAction";

import { Task } from "../interfaces/tasks";

export const useCommonTasks = (tasksPerPage = 10) => {
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

  const hasMore = useSelector<TRootState, boolean>(
    (state: TRootState) => state.tasks.hasMore
  );
  const page = useSelector<TRootState, number>(
    (state: TRootState) => state.tasks.page
  );

  useEffect(() => {
    dispatch(getCommonTasksAsyncAction({ page: 1, tasksPerPage }));
  }, [dispatch, tasksPerPage]);

  const loadMore = () => {
    dispatch(getCommonTasksAsyncAction({ page: page + 1, tasksPerPage }));
  };

  return { tasks, loading, error, page, hasMore, loadMore };
};

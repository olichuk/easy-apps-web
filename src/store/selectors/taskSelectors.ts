import { TRootState } from "..";
import { createSelector } from "reselect";
import { Task } from "../../interfaces/tasks";

const tasksSelector = (state: TRootState) => state.tasks.tasks;

export const taskInfoSelector = (taskId: string) =>
  createSelector([tasksSelector], (tasks: Task[]) =>
    tasks.find((task: Task) => task._id == taskId),
  );
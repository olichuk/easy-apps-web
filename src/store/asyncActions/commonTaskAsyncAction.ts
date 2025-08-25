import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCommonTasksApi } from "../../api/commonTaskApi";
import { CommonTasks, Task } from "../../interfaces/tasks";
import { isAxiosError } from "axios";

export const getCommonTasksAsyncAction = createAsyncThunk(
  "common-tasks",
  async ({ page, tasksPerPage }: CommonTasks, { rejectWithValue }) => {
    try {
      const { data } = await getCommonTasksApi(page, tasksPerPage);

      return data as {
        taskTotalCount: number;
        tasks: Task[];
      };
    } catch (error) {
      let errorMessage = "An unexpected error occurred";
      if (isAxiosError(error)) {
        if (error.response?.data?.error) {
          errorMessage = error.response?.data?.error;
        } else if (error.response?.data?.errors) {
          errorMessage = error.response?.data?.errors.join("\n");
        }
      }
      return rejectWithValue(errorMessage);
    }
  }
);

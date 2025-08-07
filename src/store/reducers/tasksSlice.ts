import { createSlice } from "@reduxjs/toolkit";
import { getTasksAsyncAction } from "../asyncActions/tasksAsyncActions";

export interface Task {
  id: string;
  title: string;
  done: boolean;
}

interface TasksState {
  tasks: Task[];
  isLoading: boolean;
  isError: string | null;
}

const initialState: TasksState = {
  tasks: [],
  isLoading: false,
  isError: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTasksAsyncAction.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getTasksAsyncAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = action.payload;
      })
      .addCase(getTasksAsyncAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      });
  },
});

export default tasksSlice.reducer;

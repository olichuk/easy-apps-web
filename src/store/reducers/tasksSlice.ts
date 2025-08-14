import { createSlice } from "@reduxjs/toolkit";
import {
  createTaskAsyncAction,
  deleteTaskAsyncAction,
  getTaskByIdAsyncAction,
  getTasksAsyncAction,
} from "../asyncActions/tasksAsyncActions";
import { TasksState } from "../../interfaces/tasks";

const initialState: TasksState = {
  tasks: [],
  isLoading: false,
  isError: null,
  currentTask: null,
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
      .addCase(getTasksAsyncAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      })
      .addCase(getTasksAsyncAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = action.payload.tasks;
        state.isError = null;
      })
      .addCase(createTaskAsyncAction.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(createTaskAsyncAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      })
      .addCase(deleteTaskAsyncAction.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(deleteTaskAsyncAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      })

      .addCase(getTaskByIdAsyncAction.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getTaskByIdAsyncAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      })
      .addCase(getTaskByIdAsyncAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentTask = action.payload;
        state.isError = null;
      });
  },
});
export default tasksSlice.reducer;

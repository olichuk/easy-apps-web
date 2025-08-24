import { createSlice } from "@reduxjs/toolkit";
import {
  changeTaskStatusAsyncAction,
  createTaskAsyncAction,
  deleteTaskAsyncAction,
  getTaskByIdAsyncAction,
  getTasksAsyncAction,
} from "../asyncActions/tasksAsyncActions";
import { TasksState } from "../../interfaces/tasks";
import { getCommonTasksAsyncAction } from "../asyncActions/commonTaskAsyncAction";

const initialState: TasksState = {
  tasks: [],
  isLoading: false,
  isError: null,
  currentTask: null,
  page: 1,
  totalCount: 0,
  hasMore: true,
  tasksPerPage: 10,
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
      })
      .addCase(getCommonTasksAsyncAction.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getCommonTasksAsyncAction.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.meta.arg.page === 1) {
          state.tasks = action.payload.tasks;
        } else {
          state.tasks = [...state.tasks, ...action.payload.tasks];
        }
        state.page = action.meta.arg.page;
        state.totalCount = action.payload.taskTotalCount;
        state.hasMore = state.tasks.length < state.totalCount;
      })
      .addCase(getCommonTasksAsyncAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      })
      .addCase(changeTaskStatusAsyncAction.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(changeTaskStatusAsyncAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      });
  },
});
export default tasksSlice.reducer;

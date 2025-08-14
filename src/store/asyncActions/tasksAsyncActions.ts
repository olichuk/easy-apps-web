import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getTasksApi,
  createTaskApi,
  getTaskByIdApi,
  deleteTaskApi,
} from "../../api/taskApi";
import { isAxiosError } from "axios";
import { TasksPayload } from "../../interfaces/tasks";

export const getTasksAsyncAction = createAsyncThunk(
  "tasks",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getTasksApi();
      return data;
    } catch (error) {
      let errorMessage = "An unexpected error occurred";
      if (isAxiosError(error)) {
        if (error.response?.data?.error) {
          errorMessage = error.response?.data?.error;
          console.log(error.response);
        } else if (error.response?.data?.errors) {
          errorMessage = error.response?.data?.errors.join("\n");
          console.log(error.response);
        }
      }
      alert(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const getTaskByIdAsyncAction = createAsyncThunk(
  "/tasks/:id",
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await getTaskByIdApi(id);
      return data;
    } catch (error) {
      let errorMessage = "An unexpected error occurred";
      if (isAxiosError(error)) {
        if (error.response?.data?.error) {
          errorMessage = error.response?.data?.error;
          console.log(error.response);
        } else if (error.response?.data?.errors) {
          errorMessage = error.response?.data?.errors.join("\n");
          console.log(error.response);
        }
      }
      alert(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const createTaskAsyncAction = createAsyncThunk(
  "/tasks",
  async (
    { title, description, files, onSuccess }: TasksPayload,
    { rejectWithValue, dispatch }
  ) => {
    try {
      await createTaskApi(title, description, files);
      await dispatch(getTasksAsyncAction());
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      let errorMessage = "An unexpected error occurred";
      if (isAxiosError(error)) {
        if (error.response?.data?.error) {
          errorMessage = error.response?.data?.error;
          console.log(error.response);
        } else if (error.response?.data?.errors) {
          errorMessage = error.response?.data?.errors.join("\n");
          console.log(error.response);
        }
      }
      alert(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const deleteTaskAsyncAction = createAsyncThunk(
  "tasks/delete",
  async (id: string, { rejectWithValue, dispatch }) => {
    try {
      await deleteTaskApi(id);
      dispatch(getTasksAsyncAction());
    } catch (error) {
      let errorMessage = "An unexpected error occurred";
      if (isAxiosError(error)) {
        if (error.response?.data?.error) {
          errorMessage = error.response?.data?.error;
          console.log(error.response);
        } else if (error.response?.data?.errors) {
          errorMessage = error.response?.data?.errors.join("\n");
          console.log(error.response);
        }
      }
      alert(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

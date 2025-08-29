import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getTasksApi,
  createTaskApi,
  getTaskByIdApi,
  deleteTaskApi,
  changeTaskStatusApi,
  editTaskApi,
} from "../../api/taskApi";
import { isAxiosError } from "axios";
import type { TasksPayload, StatusPayload } from "../../interfaces/tasks";
import type { Task } from "../../interfaces/tasks";

export const getTasksAsyncAction = createAsyncThunk(
  "tasks",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getTasksApi();
      console.log("getTasksAsyncAction data: ", data);
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

export const getTaskByIdAsyncAction = createAsyncThunk<
  Task,
  string,
  { rejectValue: string }
>("/tasks/:id", async (id: string, { rejectWithValue }) => {
  try {
    const { data } = await getTaskByIdApi(id);
    const parsedFiles = JSON.parse(data.files);
    const filesArray = Array.isArray(parsedFiles)
      ? (parsedFiles as File[])
      : [];
    console.log("getTaskByIdAsyncAction(id): ", parsedFiles, filesArray);
    return { ...data, files: filesArray };
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
});

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

export const updateTaskAsyncAction = createAsyncThunk(
  "tasks/updateTask",
  async (
    {
      id,
      title,
      description,
      files,
      done,
      onSuccess,
    }: {
      id: string;
      title: string;
      description: string;
      files: (File | string)[];
      done: boolean;
      oldFiles: string[];
      onSuccess?: () => void;
    },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const response = await editTaskApi(id, title, description, files, done);
      await dispatch(getTasksAsyncAction());
      if (onSuccess) {
        onSuccess();
      }
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Update task failed");
    }
  }
);

export const changeTaskStatusAsyncAction = createAsyncThunk(
  "task/:id",
  async ({ _id, done }: StatusPayload, { rejectWithValue, dispatch }) => {
    try {
      await changeTaskStatusApi(String(_id), Boolean(done));
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

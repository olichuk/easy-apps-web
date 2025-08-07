import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getTasksApi } from "../../api/taskApi";
import { isAxiosError } from "axios";
const mockTasks = [
  { id: "1", title: "Complete project documentation", done: false },
  { id: "2", title: "Review pull requests", done: true },
  { id: "3", title: "Update dependencies", done: false },
  { id: "4", title: "Write unit tests", done: true },
  { id: "5", title: "Deploy to staging", done: false },
];
export const getTasksAsyncAction = createAsyncThunk(
  "tasks",
  async (_, { rejectWithValue }) => {
    try {
      //   const { data } = await getTasksApi();
      //   return data;
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return mockTasks;
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

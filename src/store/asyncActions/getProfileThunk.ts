import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfileApi } from "../../api/user";

export const getProfileThunk = createAsyncThunk(
  "user/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getProfileApi();
      return {
        email: data.email,
        name: data.username,
        avatar: data.avatar || "",
      };
    } catch (error) {
      return rejectWithValue("Failed to load user data");
    }
  }
);

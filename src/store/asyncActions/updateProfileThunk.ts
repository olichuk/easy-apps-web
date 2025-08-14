import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateProfileApi } from "../../api/user";
import { getProfileThunk } from "./getProfileThunk";

export const updateProfileThunk = createAsyncThunk<
  void,
  { name: string; avatar?: File | null },
  { rejectValue: string }
>(
  "user/updateProfile",
  async ({ name, avatar }, { dispatch, rejectWithValue }) => {
    try {
      await updateProfileApi(name, avatar);
      await dispatch(getProfileThunk());
    } catch (error: any) {
      console.error("Error in updateProfileThunk:", error);
      const message =
        error.response?.data?.message || "Failed to update profile";
      return rejectWithValue(message);
    }
  }
);

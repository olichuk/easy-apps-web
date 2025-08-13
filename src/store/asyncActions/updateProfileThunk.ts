import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateProfileApi } from "../../api/user";
import { getProfileThunk } from "./getProfileThunk";

export const updateProfileThunk = createAsyncThunk<
  void,
  { name: string; avatar?: File | null },
  { rejectValue: string }
>("user/updateProfile", async ({ name, avatar }, { dispatch, rejectWithValue }) => {
  try {
    await updateProfileApi(name, avatar);
    await dispatch(getProfileThunk());
  } catch {
    return rejectWithValue("Failed to update profile");
  }
});

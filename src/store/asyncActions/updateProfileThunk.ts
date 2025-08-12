import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateProfileApi } from "../../api/user";
import { getProfileThunk } from "./getProfileThunk";

export const updateProfileThunk = createAsyncThunk<
  void,
  FormData,
  { rejectValue: string }
>("user/updateProfile", async (formData, { dispatch, rejectWithValue }) => {
  try {
    await updateProfileApi(formData);
    await dispatch(getProfileThunk()); 
  } catch {
    return rejectWithValue("Failed to update profile");
  }
});

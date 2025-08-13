import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteAvatarApi } from "../../api/user";
import { getProfileThunk } from "./getProfileThunk";

export const deleteAvatarThunk = createAsyncThunk<
  void,
  void,
  { rejectValue: string }
>("user/deleteAvatar", async (_, { dispatch, rejectWithValue }) => {
  try {
    await deleteAvatarApi();
    await dispatch(getProfileThunk());
  } catch {
    return rejectWithValue("Failed to delete avatar");
  }
});

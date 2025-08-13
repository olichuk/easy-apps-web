import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteAvatarThunk } from "./deleteAvatarThunk";
import { updateProfileThunk } from "./updateProfileThunk";
import { TRootState } from "../../store";

export const saveProfileThunk = createAsyncThunk<
  void,
  { name: string; avatar: File | null; avatarPreview: string },
  { state: TRootState; rejectValue: string }
>(
  "user/saveProfile",
  async ({ name, avatar, avatarPreview }, { getState, dispatch, rejectWithValue }) => {
    try {
      const { user } = getState();
      const data = user.data;
      if (!data) return rejectWithValue("Profile data not loaded");

      if (!avatarPreview && data.avatar) {
        await dispatch(deleteAvatarThunk()).unwrap();
      }

      if (name !== data.name || avatar) {
        await dispatch(updateProfileThunk({ name, avatar })).unwrap();
      }
    } catch {
      return rejectWithValue("Failed to save profile");
    }
  }
);

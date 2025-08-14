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
  async (
    { name, avatar, avatarPreview },
    { getState, dispatch, rejectWithValue }
  ) => {
    try {
      const { user } = getState();
      const data = user.data;
      if (name.trim().length < 2) {
        return rejectWithValue("Name must be at least 2 characters long");
      }
      if (!data) return rejectWithValue("Profile data not loaded");

      if (!avatarPreview && data.avatar) {
        await dispatch(deleteAvatarThunk()).unwrap();
      }

      if (name !== data.name || avatar) {
        await dispatch(updateProfileThunk({ name, avatar })).unwrap();
      }
    } catch (error: any) {
      console.error("Error in saveProfileThunk:", error);
      const errorMessage =
        (error as { payload?: string })?.payload || "Failed to save profile";
      return rejectWithValue(errorMessage);
    }
  }
);

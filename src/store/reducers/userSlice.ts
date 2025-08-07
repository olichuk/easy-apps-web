import { createSlice } from "@reduxjs/toolkit";
import { getProfileThunk } from "../asyncActions/getProfileThunk";

type UserProfile = {
  email: string;
  name: string;
  avatar: string;
} | null;

const initialState: {
  data: UserProfile;
  loading: boolean;
  error: string | null;
} = {
  data: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfileThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfileThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getProfileThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;

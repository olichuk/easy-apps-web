/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../interfaces";

const initialState: AuthState = {
  accessToken: "",
  isLoading: false,
  isError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getToken: (state) => {
      state.isLoading = true;
      state.isError = null;
    },
    getTokenSuccess: (state, action) => {
      state.isLoading = false;
      state.accessToken = action.payload;
      state.isError = null;
    },
    getTokenError: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload as string;
      sessionStorage.removeItem("token");
    },
  },
});

export default authSlice.reducer;

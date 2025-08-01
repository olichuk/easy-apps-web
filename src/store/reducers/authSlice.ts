/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../interfaces";
import {
  signInAsyncAction,
  signUpAsyncAction,
} from "../asyncActions/authAsyncActions";

const initialState: AuthState = {
  accessToken: sessionStorage.getItem("accessToken") || "",
  isLoading: false,
  isError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // 🔐 signIn
      .addCase(signInAsyncAction.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(
        signInAsyncAction.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.accessToken = action.payload;
          sessionStorage.setItem("accessToken", action.payload);
          state.isError = null;
        }
      )
      .addCase(signInAsyncAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
        state.accessToken = "";
        sessionStorage.removeItem("accessToken");
      })

      // 📝 signUp
      .addCase(signUpAsyncAction.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(
        signUpAsyncAction.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.accessToken = action.payload;
          state.isError = null;
          sessionStorage.setItem("accessToken", action.payload); // если нужно и тут сохранять
        }
      )
      .addCase(signUpAsyncAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
        state.accessToken = "";
        sessionStorage.removeItem("accessToken");
      });
  },
});

export default authSlice.reducer;

/** @format */

import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { signInApi, signUpApi } from "../../api/authApi";
import { ISignInAsyncAction, ISignUpAsyncAction } from "../../interfaces/auth";

export const signInAsyncAction = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }: ISignInAsyncAction, { rejectWithValue }) => {
    try {
      const response = await signInApi(email, password);
      const token = response.data.accessToken;

      return token;
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || "Login failed";
        return rejectWithValue(errorMessage);
      } else {
        return rejectWithValue("An unexpected error occurred");
      }
    }
  }
);

export const signUpAsyncAction = createAsyncThunk(
  "auth/signUp",
  async (
    { email, name, password, avatar }: ISignUpAsyncAction,
    { rejectWithValue }
  ) => {
    try {
      const response = await signUpApi(email, name, password, avatar);
      const token = response.data.accessToken;

      return token;
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || "Sign up failed";
        return rejectWithValue(errorMessage);
      } else {
        return rejectWithValue("An unexpected error occurred");
      }
    }
  }
);

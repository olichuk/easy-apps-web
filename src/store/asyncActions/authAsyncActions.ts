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
      console.log(error);
      let errorMessage = "An unexpected error occurred";
      if (isAxiosError(error)) {
        if (error.response?.data?.error) {
          errorMessage = error.response?.data?.error || "Sign in failed";
          console.log(error.response);
        } else if (error.response?.data?.errors) {
          errorMessage =
            error.response?.data?.errors.join("\n") || "Sign in failed";
          console.log(error.response);
        }
      }
      alert(errorMessage);
      return rejectWithValue(errorMessage);
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
      console.log(error);
      let errorMessage = "An unexpected error occurred";
      if (isAxiosError(error)) {
        if (error.response?.data?.error) {
          errorMessage = error.response?.data?.error || "Sign up failed";
          console.log(error.response);
        } else if (error.response?.data?.errors) {
          errorMessage =
            error.response?.data?.errors.join("\n") || "Sign up failed";
          console.log(error.response);
        }
      }
      alert(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

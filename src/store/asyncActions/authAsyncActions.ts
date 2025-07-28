import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { loginRequest } from "../../api/authApi";
import { LoginPayload } from "../../interfaces/auth";

export const signInAsyncAction = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }: LoginPayload, { rejectWithValue }) => {
    try {
      const response = await loginRequest(email, password);
      const token = response.data.accessToken;

      sessionStorage.setItem("token", token);

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

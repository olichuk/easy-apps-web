import { createAsyncThunk } from "@reduxjs/toolkit";
import { logoutThunk } from "./logoutThunk";
import { NavigateFunction } from "react-router-dom";

export const logoutWithRedirectThunk = createAsyncThunk<
  void,
  NavigateFunction,
  { rejectValue: string }
>(
  "auth/logoutWithRedirect",
  async (navigate, { dispatch, rejectWithValue }) => {
    try {
      if (!window.confirm("Are you sure you want to log out?")) return;

      await dispatch(logoutThunk()).unwrap();
      navigate("/login", { replace: true });
    } catch {
      alert("Failed to logout, please try again");
      return rejectWithValue("Logout failed");
    }
  }
);

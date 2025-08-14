import { createAsyncThunk } from "@reduxjs/toolkit";

export const logoutThunk = createAsyncThunk("auth/logout", async () => {

  sessionStorage.removeItem("accessToken");
  return;
});

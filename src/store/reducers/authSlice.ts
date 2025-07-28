import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";
import { isAxiosError } from "axios";
import { AuthState, LoginPayload } from "../../interfaces";
import { loginRequest } from "../../api/authApi";
import { log } from "console";
import { signInAsyncAction } from "../asyncActions/authAsyncActions";


const initialState: AuthState = {
  token: sessionStorage.getItem('token'),
  isAuthenticated: !!sessionStorage.getItem('token'),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getToken: (state) => {
      state.loading = true;
      state.error = null;
    },
    getTokenSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.error = null;
    },
    getTokenError: (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.token = null;
      sessionStorage.removeItem("token");
    },
  },
});

export default authSlice.reducer;
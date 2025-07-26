import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";
import { isAxiosError } from "axios";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: sessionStorage.getItem('token'),
  isAuthenticated: !!sessionStorage.getItem('token'),
  loading: false,
  error: null,
};

interface LoginPayload {
  email: string;
  password: string;
}

export const loginThunk = createAsyncThunk(
  'auth/login',
  async ({ email, password }: LoginPayload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/auth/login', { email, password });
      const token = response.data.accessToken;

      sessionStorage.setItem('token', token);

      return token;
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || 'Login failed';
        return rejectWithValue(errorMessage);
      } else {
        return rejectWithValue('An unexpected error occurred');
      }
    } 
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.isAuthenticated = false;
        state.token = null;
        sessionStorage.removeItem('token');
      });
  },
});

export default authSlice.reducer;
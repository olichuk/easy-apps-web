/** @format */

export interface AuthState {
  isLoading: boolean;
  isError: string | null;
  accessToken: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

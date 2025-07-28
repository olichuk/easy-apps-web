export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  accessToken?: string;
}


export interface LoginPayload {
  email: string;
  password: string;
}

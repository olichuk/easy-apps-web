/** @format */

export interface AuthState {
  isLoading: boolean;
  isError: string | null;
  accessToken: string;
}

export interface ISignInAsyncAction {
  email: string;
  password: string;
}

export interface ISignUpAsyncAction {
  email: string;
  name: string;
  password: string;
  avatar?: File;
}

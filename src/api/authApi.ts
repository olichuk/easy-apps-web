/** @format */

import axiosInstance from "./axios";

export const signInApi = (email: string, password: string) => {
  return axiosInstance.post("/auth/login", { email, password });
};

import axiosInstance from "./axios";

export const loginRequest = (email: string, password: string) => {
  return axiosInstance.post("/auth/login", { email, password });
};

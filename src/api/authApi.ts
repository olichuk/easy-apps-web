/** @format */

import axiosInstance from "./axios";

export const signInApi = (email: string, password: string) => {
  return axiosInstance.post("/auth/login", { email, password });
};

export const signUpApi = async (
  email: string,
  name: string,
  password: string,
  avatar?: File
) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("username", name);
  formData.append("password", password);

  if (avatar) {
    formData.append("avatar", avatar);
  }

  return axiosInstance.post("/auth/register", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

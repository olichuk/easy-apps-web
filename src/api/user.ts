import axiosInstance from "./axios";

export const getProfileApi = async () => {
  const response = await axiosInstance.get("/users/me");
  return response.data;
};

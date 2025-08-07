import axiosInstance from "./axios";

export const getTasksApi = async () => {
  return axiosInstance.get("/tasks");
};

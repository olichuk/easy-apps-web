import axiosInstance from "./axios";

export const getCommonTasksApi = async (page: number, tasksPerPage: number) => {
  return axiosInstance.get("/tasks/all", {
    params: { page, tasksPerPage },
  });
};

import axiosInstance from "./axios";

export const getTasksApi = async () => {
  return axiosInstance.get("/tasks");
};

export const createTaskApi = async (
  title: string,
  description: string,
  files?: File[]
) => {
  const formData = new FormData();

  formData.append("title", title);
  formData.append("description", description);

  if (files?.length) {
    files.forEach((file) => {
      formData.append("files", file);
    });
  }
  return axiosInstance.post("/tasks", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getTaskByIdApi = async (id: string) => {
  return axiosInstance.get(`/tasks/${id}`);
};

export const deleteTaskApi = async (id: string) => {
  return axiosInstance.delete(`/tasks/${id}`);
};

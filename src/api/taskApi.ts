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

  if (description.trim()) {
    formData.append("description", description);
  }

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

export const changeTaskStatusApi = (id: string, done: boolean) => {
  const formData = new FormData();
  formData.append("done", String(done));
  return axiosInstance.patch(`/tasks/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const editTaskApi = async (
  id: string,
  title: string,
  description: string,
  files?: (File | string)[],
  done?: boolean
) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("done", String(done));

  console.log("files to be uploaded: ", files);

  if (files && files.length) {
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
  }

  console.log("FormData entries:", files);

  const response = await axiosInstance.put(`/tasks/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" } as const,
  });

  return response;
};

export const deleteFileApi = (id: string, url: string) => {
  return axiosInstance.put(`/tasks/${id}/files`, { url });
};

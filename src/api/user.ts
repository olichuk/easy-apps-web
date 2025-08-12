import axiosInstance from "./axios";

export const getProfileApi = async () => {
  const response = await axiosInstance.get("/users/me");
  return response.data;
};

export const updateProfileApi = async (formData: FormData) => {
  const response = await axiosInstance.put("/users", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const deleteAvatarApi = async () => {
  const response = await axiosInstance.delete("/users/avatar");
  return response.data;
};


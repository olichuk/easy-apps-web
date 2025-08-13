import axiosInstance from "./axios";

export const getProfileApi = async () => {
  const response = await axiosInstance.get("/users/me");
  return response.data;
};

export const updateProfileApi = async (name: string, avatar?: File | null) => {
  const formData = new FormData();
  formData.append("username", name);
  if (avatar) {
    formData.append("avatar", avatar);
  }

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


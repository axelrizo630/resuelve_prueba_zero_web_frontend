import { instance } from "@/services/our-backend/our-backend.instance";

export const getMyApiKey = async () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  const response = await instance.get<{ apiKey: string }>("/users/my-api-key", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

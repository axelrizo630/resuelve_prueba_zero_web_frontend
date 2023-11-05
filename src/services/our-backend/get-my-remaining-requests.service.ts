import { instance } from "@/services/our-backend/our-backend.instance";

export const getMyRemainingRequests = async () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  const response = await instance.get<number>("/api-keys/remaining-requests", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

import { instance } from "@/services/our-backend/our-backend.instance";

export const register = async (username: string, password: string) => {
  const response = await instance.post("/auth/register", {
    username,
    password,
  });
  return response.data;
};

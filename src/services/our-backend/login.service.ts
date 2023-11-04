import { instance } from "@/services/our-backend/our-backend.instance";

export const login = async (username: string, password: string) => {
  const response = await instance.post("/auth/login", {
    username,
    password,
  });
  return response.data;
};

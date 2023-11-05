import { instance } from "@/services/our-backend/our-backend.instance";
import { AxiosError } from "axios";

export const getChuckNorrisJokesCategories = async () => {
  const response = await instance.get<string[]>(
    "/chuck-norris-jokes/categories"
  );
  return response.data;
};

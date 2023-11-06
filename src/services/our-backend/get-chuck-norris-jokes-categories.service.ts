import { instance } from "@/services/our-backend/our-backend.instance";

export const getChuckNorrisJokesCategories = async () => {
  const response = await instance.get<string[]>(
    "/chuck-norris-jokes/categories"
  );
  return response.data;
};

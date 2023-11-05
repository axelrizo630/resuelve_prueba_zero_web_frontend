import { instance } from "@/services/our-backend/our-backend.instance";
import { AxiosError } from "axios";

export const getRandomChuckNorrisJokeByCategory = async (
  apiKey: string,
  category: string
) => {
  try {
    const response = await instance.get<number>("/chuck-norris-jokes/random", {
      headers: {
        "X-API-Key": apiKey,
      },
      params: {
        category,
      },
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 429) {
      return error.response.data;
    }
  }
};

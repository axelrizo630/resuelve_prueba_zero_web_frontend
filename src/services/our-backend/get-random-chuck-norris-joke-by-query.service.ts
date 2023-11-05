import { instance } from "@/services/our-backend/our-backend.instance";
import { AxiosError } from "axios";

export const getRandomChuckNorrisJokeByQuery = async (
  apiKey: string,
  query: string
) => {
  try {
    const response = await instance.get<number>("/chuck-norris-jokes/random", {
      headers: {
        "X-API-Key": apiKey,
      },
      params: {
        query,
      },
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 429) {
      return error.response.data;
    }
  }
};

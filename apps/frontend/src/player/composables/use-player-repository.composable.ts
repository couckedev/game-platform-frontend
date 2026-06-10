import { configuration } from "@/app";
import axios from "axios";
import { AxiosPlayerRepository } from "player-infrastructure/adapters";

export const usePlayerRepository = (): AxiosPlayerRepository => {
  const playerApi = axios.create({ baseURL: configuration.playerApiUrl });
  return new AxiosPlayerRepository(playerApi);
};

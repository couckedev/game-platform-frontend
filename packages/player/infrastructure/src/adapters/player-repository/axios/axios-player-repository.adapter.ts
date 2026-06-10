import type { PlayerRepositoryPort } from "player-domain/ports";
import type { AxiosInstance } from "axios";
import { Player } from "player-domain/entities";
import {
  PLAYER_API_ROUTES,
  type CurrentPlayerResponse,
} from "../../../player-api";
import axios, { HttpStatusCode } from "axios";
import { PlayerNotFoundError } from "player-domain/errors";
import { Nickname } from "player-domain/value-objects";

export class AxiosPlayerRepository implements PlayerRepositoryPort {
  constructor(private readonly instance: AxiosInstance) {}

  async getCurrentPlayer(): Promise<Player> {
    try {
      const response =
        await this.instance.get<CurrentPlayerResponse>(
          PLAYER_API_ROUTES.GET_CURRENT_PLAYER,
        );
      return new Player(
        response.data.playerId,
        Nickname.rehydrate(response.data.nickname),
      );
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        error.response?.status === HttpStatusCode.NotFound
      ) {
        throw new PlayerNotFoundError();
      }
      throw error;
    }
  }
}

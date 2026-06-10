import { describe, expect, it } from "vitest";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { AxiosPlayerRepository } from "./axios-player-repository.adapter";
import axios from "axios";
import type { CurrentPlayerResponse } from "../../../player-api/responses";
import { Nickname } from "player-domain/value-objects";
import { PlayerNotFoundError } from "player-domain/errors";

describe("Axios adapter for player repository", () => {
  const server = setupServer();
  const authenticationUrl = "http://localhost/players/current";
  const axiosInstance = axios.create({
    baseURL: "http://localhost",
  });

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  describe("getCurrentPlayer", () => {
    it("should return the authenticated player when a player is registered", async () => {
      const currentPlayerResponse: CurrentPlayerResponse = {
        playerId: "player-1",
        nickname: "Anthony",
      };
      server.use(
        http.get(authenticationUrl, () => {
          return HttpResponse.json(currentPlayerResponse);
        }),
      );
      const repository = new AxiosPlayerRepository(axiosInstance);
      const player = await repository.getCurrentPlayer();

      expect(player.playerId).toStrictEqual(currentPlayerResponse.playerId);
      expect(player.nickname).toStrictEqual(
        Nickname.rehydrate(currentPlayerResponse.nickname),
      );
    });

    it("should throw PlayerNotFoundError when no player is registered", async () => {
      server.use(
        http.get(authenticationUrl, () => {
          return HttpResponse.json(
            {},
            {
              status: 404,
            },
          );
        }),
      );
      const repository = new AxiosPlayerRepository(axiosInstance);
      const getCurrentPlayer = () => repository.getCurrentPlayer();

      await expect(getCurrentPlayer).rejects.toBeInstanceOf(
        PlayerNotFoundError,
      );
    });
  });
});

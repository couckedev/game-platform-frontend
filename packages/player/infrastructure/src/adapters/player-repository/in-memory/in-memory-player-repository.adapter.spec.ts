import { describe, expect, it } from "vitest";
import { InMemoryPlayerRepository } from "./in-memory-player-repository.adapter";
import { Player } from "player-domain/entities";
import { Nickname } from "player-domain/value-objects";
import { PlayerNotFoundError } from "player-domain/errors";

describe("In memory adapter for player repository", () => {
  describe("getCurrentPlayer", () => {
    it("should return the authenticated player when a player is registered", async () => {
      const player = new Player(
        "player-id",
        Nickname.rehydrate("nickname"),
      );

      const repository = new InMemoryPlayerRepository(player);

      const result = await repository.getCurrentPlayer();

      expect(result).toBe(player);
    });

    it("should throw PlayerNotFoundError when no player is registered", async () => {
      const repository = new InMemoryPlayerRepository();

      await expect(
        repository.getCurrentPlayer(),
      ).rejects.toThrow(PlayerNotFoundError);
    });
  });
});
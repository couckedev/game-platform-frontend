import type { Player } from "player-domain/entities";
import type { PlayerRepositoryPort } from "player-domain/ports";
import { PlayerNotFoundError } from "player-domain/errors";

export class InMemoryPlayerRepository implements PlayerRepositoryPort {
  constructor(public authenticatedPlayer: Player | null = null) {}

  async getCurrentPlayer(): Promise<Player> {
    if (this.authenticatedPlayer === null) {
      throw new PlayerNotFoundError();
    }
    return this.authenticatedPlayer;
  }
}

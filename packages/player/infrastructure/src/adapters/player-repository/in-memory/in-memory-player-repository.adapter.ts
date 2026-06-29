import type { Player } from '@player/domain/entities';
import type { PlayerRepository } from '@player/domain/ports';

export class InMemoryPlayerRepository implements PlayerRepository {
  public currentPlayer: Player | null = null;

  async getCurrentPlayer(): Promise<Player | null> {
    return this.currentPlayer;
  }
}

import type { Player, PlayerRepository } from '@player/interface-adapters';

export class InMemoryPlayerRepository implements PlayerRepository {
  public currentPlayer: Player | null = null;

  async getCurrentPlayer(): Promise<Player | null> {
    return this.currentPlayer;
  }
}

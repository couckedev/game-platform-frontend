import type {
  Player,
  PlayerRepository,
} from '@player/interface-adapters/features/authenticate-player';

export class InMemoryPlayerRepository implements PlayerRepository {
  public currentPlayer: Player | null = null;

  async getCurrentPlayer(): Promise<Player | null> {
    return this.currentPlayer;
  }
}

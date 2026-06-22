import type { Player, PlayerRepository } from '@player/interface-adapters';
import type { InMemoryPlayerDatasource } from './in-memory-player-datasource.interface';

export class InMemoryPlayerRepository implements PlayerRepository {
  constructor(private readonly playerDatasource: InMemoryPlayerDatasource) {}

  async getCurrentPlayer(): Promise<Player | null> {
    return this.playerDatasource.currentPlayer;
  }
}

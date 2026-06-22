import type { Player } from '@player/interface-adapters';

export interface InMemoryPlayerDatasource {
  currentPlayer: Player | null;
}

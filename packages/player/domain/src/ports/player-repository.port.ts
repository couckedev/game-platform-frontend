import type { Player } from '../entities';

export interface PlayerRepository {
  getCurrentPlayer(): Promise<Player | null>;
}

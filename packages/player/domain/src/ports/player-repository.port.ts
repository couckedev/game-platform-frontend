import type { Player } from '../aggregates/index.js';

export interface PlayerRepository {
  getCurrentPlayer(): Promise<Player | null>;
}

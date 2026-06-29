import type { Player } from '../entities/index.js';

export interface PlayerRepository {
  getCurrentPlayer(): Promise<Player | null>;
}

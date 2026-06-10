import type { Player } from "../entities";

export interface PlayerRepositoryPort {
    getCurrentPlayer(): Promise<Player>;
}
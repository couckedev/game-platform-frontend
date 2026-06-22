import type { PlayerAuthenticationReadModel } from '../read-models/index.js';

export interface PlayerStore {
  playerAuthentication: PlayerAuthenticationReadModel;
  setPlayerAuthentication(readModel: PlayerAuthenticationReadModel): void;
}

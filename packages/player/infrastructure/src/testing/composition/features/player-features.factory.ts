import type { PlayerRuntime } from '../runtime';
import { createAuthenticatePlayerFeature } from './authenticate-player/authenticate-player-feature.factory';

export function createPlayerFeatures(playerRuntime: PlayerRuntime) {
  return {
    authenticatePlayer:
      createAuthenticatePlayerFeature(playerRuntime).authenticatePlayer,
  };
}

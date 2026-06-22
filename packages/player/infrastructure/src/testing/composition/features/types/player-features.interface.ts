import type { createAuthenticatePlayerFeature } from '../authenticate-player/authenticate-player-feature.factory';

export interface PlayerFeatures {
  authenticatePlayer: ReturnType<
    typeof createAuthenticatePlayerFeature
  >['authenticatePlayer'];
}

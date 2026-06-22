import type { PlayerState } from '../../../stores/common';
import type { PlayerFeatures } from '../features';
import type { PlayerRuntime } from '../runtime';

export function createPlayerPublic(
  playerRuntime: PlayerRuntime,
  playerFeatures: PlayerFeatures,
) {
  const authenticationStatus = playerRuntime.playerStore.select(
    (state: PlayerState) => state.authenticationStatus,
  );

  return {
    viewModels: {
      authenticationStatus,
    },
    features: playerFeatures,
  };
}

import type { Player } from '@player/interface-adapters';
import type { PlayerState } from '../../../stores/common';
import type { PlayerPublicDependencies } from './types';
import type { PlayerPublic } from './types/player-public.interface';

export function createPlayerPublic(
  dependencies: PlayerPublicDependencies,
): PlayerPublic {
  const authenticationStatus = dependencies.runtime.playerStore.select(
    (state: PlayerState) => state.authenticationStatus,
  );

  const currentPlayer = dependencies.runtime.playerStore.select(
    (state: PlayerState) => state.currentPlayer,
  );

  const setCurrentPlayer = (currentPlayer: Player | null) =>
    (dependencies.playerDatasource.currentPlayer = currentPlayer);

  return {
    viewModels: {
      authenticationStatus,
      currentPlayer,
    },
    features: dependencies.features,
    setCurrentPlayer,
  };
}

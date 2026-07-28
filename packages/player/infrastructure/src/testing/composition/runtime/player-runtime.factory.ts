import { InMemoryPlayerRepository } from '../../../adapters/player-repository/in-memory';
import type { PlayerState } from '../../../stores/common';
import type { PlayerRuntime } from './types/player-runtime.interface';
import type { PlayerRuntimeDependencies } from './types/player-runtime-dependencies.interface';

export function createPlayerRuntime(
  dependencies: PlayerRuntimeDependencies,
): PlayerRuntime {
  const playerStore = dependencies.storeFactory<PlayerState>({
    currentPlayer: null,
    authenticationStatus: { isAuthenticated: false, isLoading: true },
  });
  const playerRepository = new InMemoryPlayerRepository(
    dependencies.playerDatasource,
  );

  return {
    playerRepository,
    userAuthenticationChecker: dependencies.authentication.identityProvider,
    playerStore,
  };
}

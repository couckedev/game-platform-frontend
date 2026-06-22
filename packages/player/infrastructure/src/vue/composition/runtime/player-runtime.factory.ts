import { AuthenticatedHttpClient } from '@shared/infrastructure/http/common';
import { HttpPlayerRepository } from '../../../adapters/player-repository/http';
import type { PlayerState } from '../../../stores/common';
import type { PlayerRuntimeConfig, PlayerRuntimeDependencies } from './types';

export function createPlayerRuntime(
  dependencies: PlayerRuntimeDependencies,
  config: PlayerRuntimeConfig,
) {
  const playerApiHttpClient = dependencies.httpClientFactory(config.playerApi);
  const playerStore = dependencies.storeFactory<PlayerState>({
    currentPlayer: null,
    authenticationStatus: { isAuthenticated: false, isLoading: true },
  });
  const authenticatedPlayerApiHttpClient = new AuthenticatedHttpClient(
    playerApiHttpClient,
    dependencies.authentication.accessTokenProvider,
  );
  const playerRepository = new HttpPlayerRepository(
    authenticatedPlayerApiHttpClient,
  );

  return {
    playerRepository,
    userAuthenticationChecker: dependencies.authentication.identityProvider,
    playerStore,
  };
}

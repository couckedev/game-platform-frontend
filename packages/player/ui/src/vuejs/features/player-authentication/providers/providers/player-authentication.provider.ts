import {
  AuthenticatePlayerController,
  type AuthenticatePlayerOutput,
  AuthenticatePlayerUseCase,
} from '@player/interface-adapters/features/authenticate-player';
import { AuthenticationStatusPresenter } from '@player/interface-adapters/projections/authentication-status';
import { CurrentPlayerPresenter } from '@player/interface-adapters/projections/current-player';
import { useAuthentication } from '@shared/ui/authentication/vuejs';
import type { App } from 'vue';
import { usePlayerRepository } from '@/vuejs/http/player-repository/index.js';
import { useCurrentPlayerStore } from '@/vuejs/stores/current-player/index.js';
import { useAuthenticationStatusStore } from '@/vuejs/stores/index.js';
import { PLAYER_AUTHENTICATION } from './player-authentication.token.js';

export function providePlayerAuthentication(app: App) {
  const { identityProvider } = useAuthentication();
  const currentPlayerPresenter = new CurrentPlayerPresenter(
    useCurrentPlayerStore(),
  );
  const authenticationStatusPresenter = new AuthenticationStatusPresenter(
    useAuthenticationStatusStore(),
  );
  const authenticatePlayerOutput: AuthenticatePlayerOutput = (outputData) => {
    currentPlayerPresenter.present(outputData);
    authenticationStatusPresenter.present(outputData);
  };
  const authenticatePlayerUseCase = new AuthenticatePlayerUseCase(
    identityProvider,
    usePlayerRepository(),
    authenticatePlayerOutput,
  );
  const authenticatePlayerController = new AuthenticatePlayerController(
    authenticatePlayerUseCase,
  );
  app.provide(PLAYER_AUTHENTICATION, authenticatePlayerController);
}

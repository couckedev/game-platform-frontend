import {
  AuthenticatePlayerController,
  AuthenticatePlayerPresenter,
  AuthenticatePlayerUseCase,
} from '@player/interface-adapters/features/authenticate-player';
import type { AuthenticationStatusViewModel } from '@player/interface-adapters/view-models/authentication-status';
import type { CurrentPlayerViewModel } from '@player/interface-adapters/view-models/current-player';
import type { PlayerRuntime } from '../../runtime';

export function createAuthenticatePlayerFeature(playerRuntime: PlayerRuntime) {
  const authenticationStatusWriter = (
    viewModel: AuthenticationStatusViewModel,
  ) =>
    playerRuntime.playerStore.put((currentState) => ({
      ...currentState,
      authenticationStatus: viewModel,
    }));
  const currentPlayerWriter = (currentPlayer: CurrentPlayerViewModel) => {
    playerRuntime.playerStore.put((state) => ({
      ...state,
      currentPlayer,
    }));
  };
  const authenticatePlayerPresenter = new AuthenticatePlayerPresenter(
    authenticationStatusWriter,
    currentPlayerWriter,
  );
  const useCase = new AuthenticatePlayerUseCase(
    playerRuntime.userAuthenticationChecker,
    playerRuntime.playerRepository,
    authenticatePlayerPresenter,
  );
  const controller = new AuthenticatePlayerController(useCase);

  return { authenticatePlayer: () => controller.handle() };
}

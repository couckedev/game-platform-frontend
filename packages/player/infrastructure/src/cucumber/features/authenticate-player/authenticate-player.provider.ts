import {
  AuthenticatePlayerController,
  AuthenticatePlayerOutput,
  AuthenticatePlayerUseCase,
} from '@player/interface-adapters/features/authenticate-player';
import type { AuthenticatePlayerDependencies } from './authenticate-player-dependencies.interface.js';

export function provideAuthenticatePlayer({
  userAuthenticationChecker,
  playerRepository,
  currentPlayerPresenter,
  authenticationStatusPresenter,
}: AuthenticatePlayerDependencies) {
  const useCaseOutput = new AuthenticatePlayerOutput(
    currentPlayerPresenter,
    authenticationStatusPresenter,
  );
  const useCase = new AuthenticatePlayerUseCase(
    userAuthenticationChecker,
    playerRepository,
    useCaseOutput,
  );
  const controller = new AuthenticatePlayerController(useCase);

  return {
    controller,
    currentPlayerPresenter,
    authenticationStatusPresenter,
  };
}

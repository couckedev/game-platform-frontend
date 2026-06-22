import {
  AuthenticatePlayerController,
  AuthenticatePlayerPresenter,
  AuthenticatePlayerUseCase,
} from '@player/interface-adapters/features/authenticate-player';
import type { AuthenticatePlayerFeature } from './authenticate-player-feature.interface';
import type { AuthenticatePlayerFeatureDependencies } from './authenticate-player-feature-dependencies.interface';

export function buildAuthenticatePlayerFeature({
  userAuthenticationChecker,
  playerRpeository,
  currentPlayerWriter,
  authenticationStatusWriter,
}: AuthenticatePlayerFeatureDependencies): AuthenticatePlayerFeature {
  const useCaseOutput = new AuthenticatePlayerPresenter(
    authenticationStatusWriter,
    currentPlayerWriter,
  );
  const useCase = new AuthenticatePlayerUseCase(
    userAuthenticationChecker,
    playerRpeository,
    useCaseOutput,
  );
  const controller = new AuthenticatePlayerController(useCase);

  return { controller };
}

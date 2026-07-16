import {
  AuthenticatePlayerController,
  type AuthenticatePlayerOutput,
  AuthenticatePlayerUseCase,
} from '@player/interface-adapters/features/authenticate-player';
import { CurrentPlayerPresenter } from '@player/interface-adapters/projections/current-player';
import { InMemoryPlayerRepository } from '../../adapters/index.js';
import { InMemoryCurrentPlayerStore } from '../../stores/index.js';
import type { PlayerTestingModule } from './player-testing-module.interface.js';
import type { PlayerTestingModuleConfig } from './player-testing-module-config.interface.js';

export const createPlayerTestingModule = ({
  userAuthenticationChecker,
}: PlayerTestingModuleConfig): PlayerTestingModule => {
  const playerRepository = new InMemoryPlayerRepository();
  const currentPlayerStore = new InMemoryCurrentPlayerStore();
  const currentPlayerPresenter = new CurrentPlayerPresenter(currentPlayerStore);
  const authenticatePlayerOutput: AuthenticatePlayerOutput = (outputData) => {
    currentPlayerPresenter.present(outputData);
  };
  const authenticatePlayerUseCase = new AuthenticatePlayerUseCase(
    userAuthenticationChecker,
    playerRepository,
    authenticatePlayerOutput,
  );
  const authenticatePlayerController = new AuthenticatePlayerController(
    authenticatePlayerUseCase,
  );
  return {
    authenticatePlayerController,
    authenticatePlayerUseCase,
    currentPlayerPresenter,
    playerRepository,
    currentPlayerStore,
  };
};

import { AuthenticatePlayerUseCase } from '@player/application';
import {
  AuthenticatePlayerController,
  CurrentPlayerPresenter,
} from '@player/interface-adapters';
import { InMemoryIdentityProvider } from '@shared/infrastructure';
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
  const authenticatePlayerUseCase = new AuthenticatePlayerUseCase(
    userAuthenticationChecker,
    playerRepository,
    currentPlayerPresenter,
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

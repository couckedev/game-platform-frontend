import type {
  AuthenticatePlayerController,
  AuthenticatePlayerUseCase,
} from '@player/interface-adapters/features/authenticate-player';
import type {
  CurrentPlayerPresenter,
  CurrentPlayerStore,
} from '@player/interface-adapters/projections/current-player';
import type { InMemoryPlayerRepository } from '../../adapters/index.js';

export interface PlayerTestingModule {
  authenticatePlayerController: AuthenticatePlayerController;
  authenticatePlayerUseCase: AuthenticatePlayerUseCase;
  currentPlayerPresenter: CurrentPlayerPresenter;
  playerRepository: InMemoryPlayerRepository;
  currentPlayerStore: CurrentPlayerStore;
}

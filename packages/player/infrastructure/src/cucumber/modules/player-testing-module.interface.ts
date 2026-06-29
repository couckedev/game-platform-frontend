import type { AuthenticatePlayerUseCase } from '@player/application';
import type {
  AuthenticatePlayerController,
  CurrentPlayerPresenter,
  CurrentPlayerViewModel,
} from '@player/interface-adapters';
import type { ReadonlyViewModelStore } from '@shared/interface-adapters';
import type { InMemoryPlayerRepository } from '../../adapters/index.js';

export interface PlayerTestingModule {
  authenticatePlayerController: AuthenticatePlayerController;
  authenticatePlayerUseCase: AuthenticatePlayerUseCase;
  currentPlayerPresenter: CurrentPlayerPresenter;
  playerRepository: InMemoryPlayerRepository;
  currentPlayerStore: ReadonlyViewModelStore<CurrentPlayerViewModel>;
}

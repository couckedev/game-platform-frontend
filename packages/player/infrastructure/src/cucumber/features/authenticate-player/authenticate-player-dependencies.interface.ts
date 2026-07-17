import type {
  PlayerRepository,
  UserAuthenticationChecker,
} from '@player/interface-adapters';
import type {
  createAuthenticationStatusPresenter,
  createCurrentPlayerPresenter,
} from '../../presenters/index.js';

export interface AuthenticatePlayerDependencies {
  currentPlayerPresenter: ReturnType<typeof createCurrentPlayerPresenter>;
  authenticationStatusPresenter: ReturnType<
    typeof createAuthenticationStatusPresenter
  >;
  userAuthenticationChecker: UserAuthenticationChecker;
  playerRepository: PlayerRepository;
}

import type {
  PlayerRepository,
  UserAuthenticationChecker,
} from '@player/interface-adapters';
import type { AuthenticationStatusWriter } from '@player/interface-adapters/view-models/authentication-status';
import type { CurrentPlayerWriter } from '@player/interface-adapters/view-models/current-player';

export interface AuthenticatePlayerFeatureDependencies {
  userAuthenticationChecker: UserAuthenticationChecker;
  playerRpeository: PlayerRepository;
  currentPlayerWriter: CurrentPlayerWriter;
  authenticationStatusWriter: AuthenticationStatusWriter;
}

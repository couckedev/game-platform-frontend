import type { AuthenticationStatusViewModel } from '@player/interface-adapters/view-models/authentication-status';
import type { CurrentPlayerViewModel } from '@player/interface-adapters/view-models/current-player';

export interface PlayerState {
  currentPlayer: CurrentPlayerViewModel;
  authenticationStatus: AuthenticationStatusViewModel;
}

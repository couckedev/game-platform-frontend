import type { AuthenticationStatusViewModel } from '@player/interface-adapters/view-models/authentication-status';
import type { CurrentPlayerViewModel } from '@player/interface-adapters/view-models/current-player';
import { InMemoryStateStore } from '@shared/infrastructure/stores/in-memory';
import type { PlayerState } from '../common';

export class InMemoryPlayerStore extends InMemoryStateStore<PlayerState> {
  writeAuthenticationStatus(
    authenticationStatus: AuthenticationStatusViewModel,
  ) {
    this.setState({
      ...this.read(),
      authenticationStatus,
    });
  }
  selectAuthenticationStatus(): AuthenticationStatusViewModel {
    return this.read().authenticationStatus;
  }

  writeCurrentPlayer(currentPlayer: CurrentPlayerViewModel) {
    this.setState({
      ...this.read(),
      currentPlayer,
    });
  }
  selectCurrentPlayer(): CurrentPlayerViewModel {
    return this.read().currentPlayer;
  }
}

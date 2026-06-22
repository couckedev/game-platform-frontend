import type { AuthenticatePlayerOutputData } from '@player/application/features/authenticate-player';
import type { AuthenticationStatusWriter } from '../../view-models/authentication-status/authentication-status-writer.port';
import type { CurrentPlayerWriter } from '../../view-models/current-player/current-player-writer.port';

export class AuthenticatePlayerPresenter {
  constructor(
    private readonly writeAuthenticationStatus: AuthenticationStatusWriter,
    private readonly writeCurrentStatus: CurrentPlayerWriter,
  ) {}

  present(outputData: AuthenticatePlayerOutputData) {
    this.presentAuthenticationStatus(outputData);
    this.presentCurrentPlayer(outputData);
  }

  presentAuthenticationStatus(outputData: AuthenticatePlayerOutputData) {
    if (outputData.status === 'AUTHENTICATED') {
      this.writeAuthenticationStatus({
        isAuthenticated: true,
        isLoading: false,
      });
    }
    if (outputData.status === 'UNAUTHENTICATED') {
      this.writeAuthenticationStatus({
        isAuthenticated: false,
        isLoading: false,
      });
    }
  }

  presentCurrentPlayer(outputData: AuthenticatePlayerOutputData) {
    this.writeCurrentStatus(outputData.currentPlayer);
  }
}

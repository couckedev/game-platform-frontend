import type { AuthenticatePlayerOutputData } from '@player/application/authenticate-player';
import type { AuthenticationStatusStore } from './authentication-status-store.port.js';

export class AuthenticationStatusPresenter {
  constructor(private readonly storeWriter: AuthenticationStatusStore) {}

  present(outputData: AuthenticatePlayerOutputData): void {
    if (outputData.status === 'UNAUTHENTICATED') {
      this.storeWriter.write({
        isAuthenticated: false,
      });
    }
    if (outputData.status === 'NOT_REGISTERED') {
      this.storeWriter.write({
        isAuthenticated: true,
        isRegistered: false,
      });
    }
    if (outputData.status === 'AUTHENTICATED') {
      this.storeWriter.write({
        isAuthenticated: true,
        isRegistered: true,
      });
    }
  }
}

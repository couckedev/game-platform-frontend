import type { AuthenticatePlayerOutputData } from '@player/application/features/authenticate-player';
import type { AuthenticationStatusViewModel } from './authentication-status.view-model.js';

export function toAuthenticationStatusViewModel(
  outputData: AuthenticatePlayerOutputData,
): AuthenticationStatusViewModel {
  switch (outputData.status) {
    case 'UNAUTHENTICATED':
      return { isAuthenticated: false };
    case 'NOT_REGISTERED':
      return { isAuthenticated: true, isRegistered: false };
    case 'AUTHENTICATED':
      return { isAuthenticated: true, isRegistered: true };
  }
}

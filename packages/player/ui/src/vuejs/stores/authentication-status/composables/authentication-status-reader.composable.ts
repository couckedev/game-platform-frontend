import { inject } from 'vue';
import { AUTHENTICATION_STATUS_READER } from '../providers/index.js';

export function useAuthenticationStatusReader() {
  const authenticationStatusReader = inject(AUTHENTICATION_STATUS_READER);
  if (authenticationStatusReader === undefined) {
    throw new Error(
      'Authentication status view model reader has not been provided',
    );
  }
  return authenticationStatusReader;
}

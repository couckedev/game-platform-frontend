import { inject } from 'vue';
import { AUTHENTICATION_STATUS_STORE } from '../providers/index.js';

export function useAuthenticationStatusStore() {
  const authenticationStatusStore = inject(AUTHENTICATION_STATUS_STORE);
  if (authenticationStatusStore === undefined) {
    throw new Error(
      'Authentication status view model store has not been provided',
    );
  }
  return authenticationStatusStore;
}

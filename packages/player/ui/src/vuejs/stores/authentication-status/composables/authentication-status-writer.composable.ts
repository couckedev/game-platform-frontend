import { inject } from 'vue';
import { AUTHENTICATION_STATUS_WRITER } from '../providers/index.js';

export function useAuthenticationStatusWriter() {
  const authenticationStatusWriter = inject(AUTHENTICATION_STATUS_WRITER);
  if (authenticationStatusWriter === undefined) {
    throw new Error(
      'Authentication status view model writer has not been provided',
    );
  }
  return authenticationStatusWriter;
}

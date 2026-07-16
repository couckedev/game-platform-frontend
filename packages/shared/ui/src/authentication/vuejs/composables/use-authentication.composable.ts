import { inject } from 'vue';
import { AUTHENTICATION, type Authentication } from '../providers/index.js';

export function useAuthentication(): Authentication {
  const authentication = inject(AUTHENTICATION);
  if (authentication === undefined) {
    throw new Error('Authentication has not been provided');
  }
  return authentication;
}

import type { AuthenticationStatusStore } from '@player/interface-adapters/projections/authentication-status';
import type { InjectionKey } from 'vue';

export const AUTHENTICATION_STATUS_STORE = Symbol(
  'AUTHENTICATION_STATUS_STORE',
) as InjectionKey<AuthenticationStatusStore>;

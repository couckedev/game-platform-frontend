import type { AuthenticationStatusWriter } from '@player/interface-adapters/projections/authentication-status';
import type { InjectionKey } from 'vue';

export const AUTHENTICATION_STATUS_WRITER = Symbol(
  'AUTHENTICATION_STATUS_WRITER',
) as InjectionKey<AuthenticationStatusWriter>;

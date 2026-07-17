import type { AuthenticationStatusViewModel } from '@player/interface-adapters/projections/authentication-status';
import type { InjectionKey, Ref } from 'vue';

export const AUTHENTICATION_STATUS_READER = Symbol(
  'AUTHENTICATION_STATUS_READER',
) as InjectionKey<Ref<AuthenticationStatusViewModel>>;

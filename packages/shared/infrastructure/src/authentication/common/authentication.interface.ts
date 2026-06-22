import type {
  AccessTokenProvider,
  IdentityProvider,
} from '@shared/infrastructure/authentication/common';

export interface Authentication {
  identityProvider: IdentityProvider;
  accessTokenProvider: AccessTokenProvider;
  init: () => Promise<void>;
}

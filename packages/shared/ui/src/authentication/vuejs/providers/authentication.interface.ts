import type {
  AccessTokenProvider,
  IdentityProvider,
} from '@shared/infrastructure/authentication';

export interface Authentication {
  identityProvider: IdentityProvider;
  accessTokenProvider: AccessTokenProvider;
}

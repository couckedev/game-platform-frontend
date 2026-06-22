import type { AccessTokenProvider, Authentication } from '../common';
import { InMemoryIdentityProvider } from './in-memory-identity-provider';

export function createInMemoryAuthentication(): Authentication {
  const identityProvider = new InMemoryIdentityProvider();
  const accessTokenProvider: AccessTokenProvider = {
    getAccessToken: async () => null,
  };
  return {
    identityProvider,
    accessTokenProvider,
    init: async () => {},
  };
}

import type { InMemoryIdentityProvider } from '../../authentication/index.js';

export interface SharedTestingModule {
  identityProvider: InMemoryIdentityProvider;
}

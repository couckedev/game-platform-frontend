import { InMemoryIdentityProvider } from '../../authentication/index.js';

export function bootstrapShared() {
  const identityProvider = new InMemoryIdentityProvider();
  return {
    identityProvider,
  };
}

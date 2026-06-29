import { InMemoryIdentityProvider } from '../../authentication/in-memory/index.js';
import type { SharedTestingModule } from './shared-testing-module.interface.js';

export const createSharedTestingModule = (): SharedTestingModule => {
  const identityProvider = new InMemoryIdentityProvider();
  return {
    identityProvider,
  };
};

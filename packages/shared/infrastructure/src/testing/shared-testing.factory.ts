import { createSharedRuntime } from './composition';
import type { SharedTesting } from './shared-testing.interface';

export function createSharedTesting(): SharedTesting {
  const sharedRuntime = createSharedRuntime();

  const setUserAsUnauthenticated = () =>
    sharedRuntime.authentication.identityProvider.logout();

  const setUserAsAuthenticated = () =>
    sharedRuntime.authentication.identityProvider.login();
  return {
    runtime: sharedRuntime,
    setUserAsUnauthenticated,
    setUserAsAuthenticated,
  };
}

import type { App } from 'vue';
import type { KeycloakConfig } from '../../authentication/keycloak';
import { createSharedRuntime } from '../composition';
import { SharedRuntime } from './tokens/shared-runtime.token';

export function provideSharedRuntime(app: App, config: KeycloakConfig) {
  const sharedRuntime = createSharedRuntime(config);
  app.provide(SharedRuntime, sharedRuntime);
  return sharedRuntime;
}

import {
  createKeycloakAuthentication,
  type KeycloakConfig,
} from '../../authentication/keycloak';
import { createHttpClient } from '../../http/axios';
import { createTanstackObservableStateStore } from '../../stores/tanstack';

export function createSharedRuntime(config: KeycloakConfig) {
  const authentication = createKeycloakAuthentication(config);
  const httpClientFactory = createHttpClient;
  const storeFactory = createTanstackObservableStateStore;
  return {
    authentication,
    httpClientFactory,
    storeFactory,
  };
}

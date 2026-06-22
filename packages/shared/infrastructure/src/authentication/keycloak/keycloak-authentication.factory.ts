import type { Authentication } from '../common';
import { createKeycloak } from './keycloak.factory';
import { KeycloakAccessTokenProvider } from './keycloak-access-token-provider';
import type { KeycloakConfig } from './keycloak-config.interface';
import { KeycloakIdentityProvider } from './keycloak-identity-provider';

export function createKeycloakAuthentication(
  config: KeycloakConfig,
): Authentication {
  const authenticationClient = createKeycloak(config);
  const identityProvider = new KeycloakIdentityProvider(authenticationClient);
  return {
    identityProvider,
    accessTokenProvider: new KeycloakAccessTokenProvider(authenticationClient),
    init: async () => {
      await authenticationClient.init({
        onLoad: 'check-sso',
        messageReceiveTimeout: 2000,
      });
    },
  };
}

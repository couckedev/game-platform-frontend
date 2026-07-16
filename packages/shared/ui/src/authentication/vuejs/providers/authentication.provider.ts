import {
  createKeycloak,
  KeycloakAccessTokenProvider,
  KeycloakIdentityProvider,
} from '@shared/infrastructure/authentication';
import type { App } from 'vue';
import type { SharedModuleConfig } from '@/composition/vuejs/shared-module-config.interface.js';
import { AUTHENTICATION, type Authentication } from '../providers/index.js';

export async function provideAuthentication(
  app: App,
  config: SharedModuleConfig,
) {
  const keycloakInstance = createKeycloak(config.keycloak);
  await keycloakInstance.init({
    onLoad: 'check-sso',
    messageReceiveTimeout: 2000,
  });
  app.provide<Authentication>(AUTHENTICATION, {
    identityProvider: new KeycloakIdentityProvider(keycloakInstance),
    accessTokenProvider: new KeycloakAccessTokenProvider(keycloakInstance),
  });
}

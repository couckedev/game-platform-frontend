import { Container } from 'inversify';
import { createPinia } from 'pinia';
import {
  createKeycloak,
  KeycloakAccessTokenProvider,
  KeycloakIdentityProvider,
} from '../../authentication/index.js';
import { LoginUserHandler, LogoutUserHandler } from '../handlers/index.js';
import {
  ACCESS_TOKEN_PROVIDER,
  IDENTITY_PROVIDER,
  LOGIN_USER_HANDLER,
  LOGOUT_USER_HANDLER,
  STORE_INSTANCE,
} from '../tokens/index.js';
import type { SharedModuleConfig } from './shared-module-config.interface.js';

export const createSharedModule = async (
  config: SharedModuleConfig,
): Promise<Container> => {
  const container = new Container();
  const piniaInstance = createPinia();
  const keycloakInstance = createKeycloak(config.keycloakConfig);
  const identityProvider = new KeycloakIdentityProvider(keycloakInstance);
  await identityProvider.init();
  container.bind(STORE_INSTANCE).toConstantValue(piniaInstance);
  container.bind(IDENTITY_PROVIDER).toConstantValue(identityProvider);
  container
    .bind(ACCESS_TOKEN_PROVIDER)
    .toConstantValue(new KeycloakAccessTokenProvider(keycloakInstance));
  container
    .bind(LOGIN_USER_HANDLER)
    .toConstantValue(new LoginUserHandler(identityProvider));
  container
    .bind(LOGOUT_USER_HANDLER)
    .toConstantValue(new LogoutUserHandler(identityProvider));

  return container;
};

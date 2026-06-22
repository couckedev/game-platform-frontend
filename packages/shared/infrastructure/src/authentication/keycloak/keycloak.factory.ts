import Keycloak from 'keycloak-js';
import type { KeycloakConfig } from './keycloak-config.interface';

export const createKeycloak = (config: KeycloakConfig) => {
  const keycloak = new Keycloak(config);
  return keycloak;
};

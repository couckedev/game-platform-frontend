import type Keycloak from 'keycloak-js';
import type { AccessTokenProvider } from '../common';

export class KeycloakAccessTokenProvider implements AccessTokenProvider {
  constructor(private readonly keycloak: Keycloak) {}

  async getAccessToken(): Promise<string | null> {
    return this.keycloak.token ?? null;
  }
}

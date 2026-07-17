import type Keycloak from 'keycloak-js';
import type { KeycloakLoginOptions } from 'keycloak-js';
import type { IdentityProvider } from '../common/index.js';

export class KeycloakIdentityProvider implements IdentityProvider {
  constructor(private readonly keycloak: Keycloak) {}

  get isAuthenticated(): boolean {
    return this.keycloak.authenticated;
  }

  async login(options?: { provider: string }): Promise<void> {
    const loginOptions: KeycloakLoginOptions = {};
    if (options && options.provider !== undefined) {
      loginOptions.idpHint = options.provider;
    }
    await this.keycloak.login(loginOptions);
  }

  async logout(): Promise<void> {
    await this.keycloak.logout();
  }
}

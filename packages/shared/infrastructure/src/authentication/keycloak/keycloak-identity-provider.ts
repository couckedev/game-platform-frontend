import type Keycloak from 'keycloak-js';
import type { KeycloakLoginOptions } from 'keycloak-js';
import type { IdentityProvider } from '../common/index.js';

export class KeycloakIdentityProvider implements IdentityProvider {
  private onAuthChangeCallback?: (isAuthenticated: boolean) => void;

  constructor(private readonly keycloak: Keycloak) {
    keycloak.onAuthSuccess = () => this.onAuthChangeCallback?.(true);
    keycloak.onAuthLogout = () => this.onAuthChangeCallback?.(false);
    keycloak.onAuthRefreshError = () => this.onAuthChangeCallback?.(false);
    keycloak.onTokenExpired = () => {
      keycloak.updateToken(30).catch(() => this.onAuthChangeCallback?.(false));
    };
  }

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

  onAuthChange(callback: (isAuthenticated: boolean) => void): void {
    this.onAuthChangeCallback = callback;
  }

  async logout(): Promise<void> {
    await this.keycloak.logout();
  }
}

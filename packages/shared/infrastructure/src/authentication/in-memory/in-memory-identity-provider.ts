import type { IdentityProvider } from '../common/index.js';

export class InMemoryIdentityProvider implements IdentityProvider {
  private _authenticated = false;

  async login(): Promise<void> {
    this._authenticated = true;
  }

  async logout(): Promise<void> {
    this._authenticated = false;
  }

  get isAuthenticated(): boolean {
    return this._authenticated;
  }
}

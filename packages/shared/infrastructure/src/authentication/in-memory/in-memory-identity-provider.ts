import type { IdentityProvider } from '../common';

export class InMemoryIdentityProvider implements IdentityProvider {
  private _authenticated = false;

  async login() {
    this._authenticated = true;
  }

  async logout() {
    this._authenticated = false;
  }

  get isAuthenticated(): boolean {
    return this._authenticated;
  }
}

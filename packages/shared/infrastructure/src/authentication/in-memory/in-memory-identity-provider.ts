export class InMemoryIdentityProvider {
  private _authenticated = false;

  setAuthenticated(authenticated: boolean) {
    this._authenticated = authenticated;
  }

  get isAuthenticated(): boolean {
    return this._authenticated;
  }
}

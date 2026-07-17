import type { IdentityProvider } from '../../authentication/index.js';
import { bootstrapShared } from '../bootstrap/index.js';

export class SharedContext {
  public readonly bootstrap: ReturnType<typeof bootstrapShared>;

  constructor() {
    this.bootstrap = bootstrapShared();
  }

  loginUser(): void {
    this.bootstrap.identityProvider.login();
  }

  logoutUser(): void {
    this.bootstrap.identityProvider.logout();
  }

  get identityProvider(): IdentityProvider {
    return this.bootstrap.identityProvider;
  }
}

import type { IdentityProvider } from '../../authentication/index.js';

export class LogoutUserHandler {
  constructor(private readonly identityProvider: IdentityProvider) {}

  async handle(): Promise<void> {
    await this.identityProvider.logout();
  }
}

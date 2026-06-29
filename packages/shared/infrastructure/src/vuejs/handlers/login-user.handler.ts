import type { IdentityProvider } from '../../authentication/index.js';

export class LoginUserHandler {
  constructor(private readonly identityProvider: IdentityProvider) {}

  async handle(provider: string): Promise<void> {
    await this.identityProvider.login({ provider: provider });
  }
}

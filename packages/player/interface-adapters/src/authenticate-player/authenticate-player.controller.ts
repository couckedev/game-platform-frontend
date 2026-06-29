import type { AuthenticatePlayerUseCase } from '@player/application/authenticate-player';

export class AuthenticatePlayerController {
  constructor(private readonly useCase: AuthenticatePlayerUseCase) {}

  async handle(): Promise<void> {
    return this.useCase.execute();
  }
}

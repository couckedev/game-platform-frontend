import type { AuthenticatePlayerUseCase } from "player-application/use-cases";

export class AuthenticatePlayerController {
  constructor(
    protected readonly authenticatePlayerUseCase: AuthenticatePlayerUseCase,
  ) {}

  async handle(): Promise<void> {
    return await this.authenticatePlayerUseCase.execute();
  }
}

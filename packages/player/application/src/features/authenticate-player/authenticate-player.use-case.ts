import type { PlayerRepository } from '@player/domain/ports';
import type { UserAuthenticationChecker } from '../../ports';

import type { AuthenticatePlayerOutput } from './authenticate-player-output.port';

export class AuthenticatePlayerUseCase {
  constructor(
    private readonly userAuthenticationChecker: UserAuthenticationChecker,
    private readonly playerRepository: PlayerRepository,
    private readonly output: AuthenticatePlayerOutput,
  ) {}

  async execute(): Promise<void> {
    if (!this.userAuthenticationChecker.isAuthenticated) {
      return this.output.present({
        status: 'UNAUTHENTICATED',
        currentPlayer: null,
      });
    }
    const currentPlayer = await this.playerRepository.getCurrentPlayer();
    if (currentPlayer === null) {
      return;
    }
    return this.output.present({
      status: 'AUTHENTICATED',
      currentPlayer: {
        nickname: currentPlayer.nickname.value,
        playerId: currentPlayer.playerId.value,
      },
    });
  }
}

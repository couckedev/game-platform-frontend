import type { PlayerRepository } from '@player/domain/ports';

import type { AuthenticatePlayerOutput } from './authenticate-player-output.port';

export class AuthenticatePlayerUseCase {
  constructor(
    private readonly playerRepository: PlayerRepository,
    private readonly output: AuthenticatePlayerOutput,
  ) {}

  async execute(): Promise<void> {
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

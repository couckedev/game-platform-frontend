import type {
  PlayerRepository,
  UserAuthenticationChecker,
} from '@player/domain/ports';
import type { AuthenticatePlayerOutputData } from './authenticate-player.output-data.js';
import type { AuthenticatePlayerOutput } from './authenticate-player-output.port.js';

export class AuthenticatePlayerUseCase {
  constructor(
    private readonly userAuthenticationChecker: UserAuthenticationChecker,
    private readonly playerRepository: PlayerRepository,
    private readonly authenticatePlayerOutput: AuthenticatePlayerOutput,
  ) {}

  async execute(): Promise<void> {
    if (!this.userAuthenticationChecker.isAuthenticated) {
      return this.authenticatePlayerOutput.present({
        status: 'UNAUTHENTICATED',
        currentPlayer: null,
      });
    }
    const currentPlayer = await this.playerRepository.getCurrentPlayer();
    if (currentPlayer === null) {
      return;
    }
    const outputData: AuthenticatePlayerOutputData = {
      status: 'AUTHENTICATED',
      currentPlayer: {
        nickname: currentPlayer.nickname,
        playerId: currentPlayer.playerId,
      },
    };
    this.authenticatePlayerOutput.present(outputData);
  }
}

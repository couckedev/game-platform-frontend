import type {
  PlayerRepository,
  UserAuthenticationChecker,
} from '@player/domain/ports';
import type { AuthenticatePlayerOutputBoundary } from './authenticate-player-output.port.js';

export class AuthenticatePlayerUseCase {
  constructor(
    private readonly userAuthenticationChecker: UserAuthenticationChecker,
    private readonly playerRepository: PlayerRepository,
    private readonly output: AuthenticatePlayerOutputBoundary,
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
      return this.output.present({
        status: 'NOT_REGISTERED',
        currentPlayer: null,
      });
    }
    return this.output.present({
      status: 'AUTHENTICATED',
      currentPlayer: {
        nickname: currentPlayer.nickname,
        playerId: currentPlayer.playerId,
      },
    });
  }
}

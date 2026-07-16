import type {
  PlayerRepository,
  UserAuthenticationChecker,
} from '@player/domain/ports';
import type { AuthenticatePlayerOutput } from './authenticate-player-output.port.js';

export class AuthenticatePlayerUseCase {
  constructor(
    private readonly userAuthenticationChecker: UserAuthenticationChecker,
    private readonly playerRepository: PlayerRepository,
    private readonly output: AuthenticatePlayerOutput,
  ) {}

  async execute(): Promise<void> {
    if (!this.userAuthenticationChecker.isAuthenticated) {
      return this.output({
        status: 'UNAUTHENTICATED',
        currentPlayer: null,
      });
    }
    const currentPlayer = await this.playerRepository.getCurrentPlayer();
    if (currentPlayer === null) {
      return this.output({
        status: 'NOT_REGISTERED',
        currentPlayer: null,
      });
    }
    return this.output({
      status: 'AUTHENTICATED',
      currentPlayer: {
        nickname: currentPlayer.nickname,
        playerId: currentPlayer.playerId,
      },
    });
  }
}

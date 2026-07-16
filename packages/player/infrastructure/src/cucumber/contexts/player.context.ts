import { Player } from '@player/interface-adapters/features/authenticate-player';
import type { CurrentPlayerStore } from '@player/interface-adapters/projections/current-player';
import {
  InitializationError,
  type Resettable,
  type SharedContext,
} from '@shared/infrastructure/cucumber';
import {
  createPlayerTestingModule,
  type PlayerTestingModule,
} from '../modules/index.js';

export class PlayerContext implements Resettable {
  private playerModule: PlayerTestingModule;

  constructor(_sharedContext: SharedContext) {
    this.playerModule = createPlayerTestingModule({
      userAuthenticationChecker: _sharedContext.sharedModule.identityProvider,
    });
  }

  get currentPlayerStore(): CurrentPlayerStore {
    return this.playerModule.currentPlayerStore;
  }

  async requestAuthentication(): Promise<void> {
    await this.playerModule.authenticatePlayerController.handle();
  }

  setCurrentPlayer(nickname: string, playerId: string) {
    this.playerModule.playerRepository.currentPlayer = new Player(
      playerId,
      nickname,
    );
  }

  get currentPlayer(): Player {
    const currentPlayer = this.playerModule.playerRepository.currentPlayer;
    if (currentPlayer === null) {
      throw new InitializationError('currentPlayer');
    }
    return currentPlayer;
  }

  reset(): void | Promise<void> {}
}

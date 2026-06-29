import { Player } from '@player/domain';
import type { CurrentPlayerViewModel } from '@player/interface-adapters';
import {
  InitializationError,
  type Resettable,
  type SharedContext,
} from '@shared/infrastructure/cucumber';
import type { ReadonlyViewModelStore } from '@shared/interface-adapters';
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

  get currentPlayerStore(): ReadonlyViewModelStore<CurrentPlayerViewModel> {
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

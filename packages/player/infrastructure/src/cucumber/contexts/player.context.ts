// player.context.ts

import { Player } from '@player/interface-adapters';
import type { IdentityProvider } from '@shared/infrastructure/authentication';
import type { Resettable } from '@shared/infrastructure/cucumber';
import { bootstrapPlayer } from '../bootstrap/index.js';

export class PlayerContext implements Resettable {
  private bootstrap: ReturnType<typeof bootstrapPlayer>;

  constructor(identityProvider: IdentityProvider) {
    this.bootstrap = bootstrapPlayer({
      userAuthenticationChecker: identityProvider,
    });
  }

  async authenticate(): Promise<void> {
    await this.bootstrap.authenticatePlayer.controller.handle();
  }

  setCurrentPlayer(nickname: string, playerId: string) {
    this.bootstrap.playerRepository.currentPlayer = new Player(
      playerId,
      nickname,
    );
  }

  get currentPlayerViewModel() {
    return this.bootstrap.currentPlayerPresenter.viewModel;
  }

  get authenticationStatusViewModel() {
    return this.bootstrap.authenticationStatusPresenter.viewModel;
  }

  get currentPlayer(): Player | null {
    return this.bootstrap.playerRepository.currentPlayer;
  }

  reset(): void {
    this.bootstrap.currentPlayerPresenter.reset();
    this.bootstrap.authenticationStatusPresenter.reset();
    this.bootstrap.playerRepository.currentPlayer = null;
  }
}

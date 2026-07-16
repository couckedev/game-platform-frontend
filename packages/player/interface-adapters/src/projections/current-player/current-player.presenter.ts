import type { AuthenticatePlayerOutputData } from '@player/application/authenticate-player';
import type { CurrentPlayerStore } from '../../projections/current-player/index.js';

export class CurrentPlayerPresenter {
  constructor(private readonly storeWriter: CurrentPlayerStore) {}

  present(outputData: AuthenticatePlayerOutputData): void {
    this.storeWriter.write({
      currentPlayer: outputData.currentPlayer,
    });
  }
}

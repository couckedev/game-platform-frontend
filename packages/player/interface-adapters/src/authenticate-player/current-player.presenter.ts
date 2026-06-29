import type { AuthenticatePlayerOutputData } from '@player/application';
import type { WritableViewModelStore } from '@shared/interface-adapters/ports';
import type { CurrentPlayerViewModel } from './current-player.view-model.js';

export class CurrentPlayerPresenter {
  constructor(
    private readonly storeWriter: WritableViewModelStore<CurrentPlayerViewModel>,
  ) {}

  present(outputData: AuthenticatePlayerOutputData): void {
    this.storeWriter.write(outputData);
  }
}

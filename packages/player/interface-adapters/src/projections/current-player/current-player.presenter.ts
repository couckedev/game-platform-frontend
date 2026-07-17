import type { AuthenticatePlayerOutputData } from '@player/application/features/authenticate-player';
import type { CurrentPlayerViewModel } from './current-player.view-model.js';
import { toCurrentPlayerViewModel } from './current-player-view-model.mapper.js';

export class CurrentPlayerPresenter {
  constructor(
    private readonly write: (viewModel: CurrentPlayerViewModel) => void,
  ) {}

  present(outputData: AuthenticatePlayerOutputData): void {
    this.write(toCurrentPlayerViewModel(outputData));
  }
}

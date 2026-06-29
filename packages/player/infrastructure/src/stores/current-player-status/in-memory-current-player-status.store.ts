import type { CurrentPlayerViewModel } from '@player/interface-adapters/authenticate-player';
import type { WritableViewModelStore } from '@shared/interface-adapters';

export class InMemoryCurrentPlayerStore
  implements WritableViewModelStore<CurrentPlayerViewModel>
{
  private _viewModel: CurrentPlayerViewModel = {
    status: 'LOADING',
    currentPlayer: null,
  };

  get viewModel(): CurrentPlayerViewModel {
    return this._viewModel;
  }

  write(viewModel: CurrentPlayerViewModel): void {
    this._viewModel = viewModel;
  }
}

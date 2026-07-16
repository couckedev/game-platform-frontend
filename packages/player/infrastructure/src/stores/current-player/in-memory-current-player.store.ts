import type {
  CurrentPlayerStore,
  CurrentPlayerViewModel,
} from '@player/interface-adapters/projections/current-player';

export class InMemoryCurrentPlayerStore implements CurrentPlayerStore {
  private _viewModel: CurrentPlayerViewModel = {
    currentPlayer: null,
  };

  get viewModel(): CurrentPlayerViewModel {
    return this._viewModel;
  }

  write(viewModel: CurrentPlayerViewModel): void {
    this._viewModel = viewModel;
  }
}

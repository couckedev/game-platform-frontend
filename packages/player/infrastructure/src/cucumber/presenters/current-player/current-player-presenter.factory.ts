import type { AuthenticatePlayerOutputData } from '@player/interface-adapters/features/authenticate-player';
import {
  type CurrentPlayerViewModel,
  toCurrentPlayer,
} from '@player/interface-adapters/projections/current-player';

export function createCurrentPlayerPresenter() {
  const _defaultValue: CurrentPlayerViewModel = { currentPlayer: null };
  let _viewModel: CurrentPlayerViewModel = _defaultValue;

  return {
    get viewModel() {
      return _viewModel;
    },
    present(outputData: AuthenticatePlayerOutputData) {
      _viewModel = toCurrentPlayer(outputData);
    },
    reset() {
      _viewModel = _defaultValue;
    },
  };
}

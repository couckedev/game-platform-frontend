import type { AuthenticatePlayerOutputData } from '@player/application/features/authenticate-player';
import type { CurrentPlayerViewModel } from './current-player.view-model.js';

export function toCurrentPlayerViewModel(
  outputData: AuthenticatePlayerOutputData,
): CurrentPlayerViewModel {
  return {
    currentPlayer: outputData.currentPlayer,
  };
}

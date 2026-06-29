import {
  CURRENT_PLAYER_STORE,
  PLAYER_MODULE,
} from '@player/infrastructure/vuejs';
import { injectStrict } from '@shared/infrastructure/vuejs';

export function usePlayerMenuButton() {
  const playerModule = injectStrict(PLAYER_MODULE);
  const currentPlayerStore = playerModule.get(CURRENT_PLAYER_STORE);

  if (currentPlayerStore.viewModel.status !== 'AUTHENTICATED') {
    throw new Error(
      'Player menu button cannot be rendered because there is not authenticated player',
    );
  }

  return { nickname: currentPlayerStore.viewModel.currentPlayer.nickname };
}

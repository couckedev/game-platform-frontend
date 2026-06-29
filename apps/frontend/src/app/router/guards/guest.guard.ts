import {
  CURRENT_PLAYER_STORE,
  type PlayerModule,
} from '@player/infrastructure/vuejs';
import type { NavigationGuard } from 'vue-router';

export function guestGuard(playerModule: PlayerModule): NavigationGuard {
  return async (_to, _from, next) => {
    const { viewModel: currentPlayer } = playerModule.get(CURRENT_PLAYER_STORE);
    if (currentPlayer.status !== 'UNAUTHENTICATED')
      return next({ name: 'home' });
    next();
  };
}

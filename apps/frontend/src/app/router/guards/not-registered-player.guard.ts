import {
  CURRENT_PLAYER_STORE,
  type PlayerModule,
} from '@player/infrastructure/vuejs';
import type { NavigationGuard } from 'vue-router';

export function notRegisteredPlayerGuard(
  playerModule: PlayerModule,
): NavigationGuard {
  return (_to, _from, next) => {
    const { viewModel } = playerModule.get(CURRENT_PLAYER_STORE);
    if (viewModel.status === 'NOT_REGISTERED') {
      return next({ name: 'register' });
    }
    next();
  };
}

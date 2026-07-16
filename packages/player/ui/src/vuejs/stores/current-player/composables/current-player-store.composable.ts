import { inject } from 'vue';
import { CURRENT_PLAYER_STORE } from '../providers/index.js';

export function useCurrentPlayerStore() {
  const currentPlayerStore = inject(CURRENT_PLAYER_STORE);
  if (currentPlayerStore === undefined) {
    throw new Error('Current player view model store has not been provided');
  }
  return currentPlayerStore;
}

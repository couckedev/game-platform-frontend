import { inject } from 'vue';
import { PLAYER_REPOSITORY } from '../providers/index.js';

export function usePlayerRepository() {
  const playerRepository = inject(PLAYER_REPOSITORY);
  if (playerRepository === undefined) {
    throw new Error('Player repository has not been provided');
  }
  return playerRepository;
}

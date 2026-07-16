import { inject } from 'vue';
import { PLAYER_AUTHENTICATION } from '../providers/index.js';

export function usePlayerAuthentication() {
  const playerAuthentication = inject(PLAYER_AUTHENTICATION);
  if (playerAuthentication === undefined) {
    throw new Error('Player authentication has not been provided');
  }
  return playerAuthentication;
}

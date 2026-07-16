import { inject } from 'vue';
import { PLAYER_API_HTTP_CLIENT } from '../providers/index.js';

export function usePlayerApiHttpClient() {
  const playerApiHttpClient = inject(PLAYER_API_HTTP_CLIENT);
  if (playerApiHttpClient === undefined) {
    throw new Error('Player api http client has not been provided');
  }
  return playerApiHttpClient;
}

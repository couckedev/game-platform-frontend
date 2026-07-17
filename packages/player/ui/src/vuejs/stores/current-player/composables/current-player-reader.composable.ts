import { inject } from 'vue';
import { CURRENT_PLAYER_READER } from '../providers/index.js';

export function useCurrentPlayerReader() {
  const currentPlayerReader = inject(CURRENT_PLAYER_READER);
  if (currentPlayerReader === undefined) {
    throw new Error('Current player view model reader has not been provided');
  }
  return currentPlayerReader;
}

import { inject } from 'vue';
import { CURRENT_PLAYER_WRITER } from '../providers/index.js';

export function useCurrentPlayerWriter() {
  const currentPlayerWriter = inject(CURRENT_PLAYER_WRITER);
  if (currentPlayerWriter === undefined) {
    throw new Error('Current player view model writer has not been provided');
  }
  return currentPlayerWriter;
}

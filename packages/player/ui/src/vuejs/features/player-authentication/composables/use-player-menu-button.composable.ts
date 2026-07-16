import { useCurrentPlayerStore } from '@/vuejs/stores/current-player/index.js';

export function usePlayerMenuButton() {
  const currentPlayerStore = useCurrentPlayerStore();

  if (currentPlayerStore.viewModel.status !== 'AUTHENTICATED') {
    throw new Error(
      'Player menu button cannot be rendered because there is not authenticated player',
    );
  }

  return { nickname: currentPlayerStore.viewModel.currentPlayer.nickname };
}

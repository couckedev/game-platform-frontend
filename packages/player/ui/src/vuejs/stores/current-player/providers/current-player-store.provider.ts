import { useCurrentPlayerStore } from '@player/infrastructure/stores';
import { useStore } from '@shared/ui/stores/vuejs';
import type { App } from 'vue';
import { CURRENT_PLAYER_STORE } from './current-player-store.token.js';

export function provideCurrentPlayerStore(app: App) {
  const storeInstance = useStore();
  const currentPlayerStore = useCurrentPlayerStore(storeInstance);
  app.provide(CURRENT_PLAYER_STORE, currentPlayerStore);
}

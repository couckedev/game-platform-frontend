import type { CurrentPlayerViewModel } from '@player/interface-adapters/projections/current-player';
import { useStore } from '@shared/ui/stores/vuejs';
import { defineStore, storeToRefs } from 'pinia';
import { type App, computed, readonly, ref } from 'vue';
import { CURRENT_PLAYER_READER } from './current-player-reader.token.js';
import { CURRENT_PLAYER_WRITER } from './current-player-writer.token.js';

export function provideCurrentPlayerStore(app: App) {
  const storeInstance = useStore();
  const currentPlayerStore = defineStore('current-player', () => {
    const _viewModel = ref<CurrentPlayerViewModel>({
      currentPlayer: null,
    });

    function write(viewModel: CurrentPlayerViewModel) {
      _viewModel.value = viewModel;
    }

    return {
      viewModel: computed(() => _viewModel.value),
      write,
    };
  })(storeInstance);
  const { viewModel } = storeToRefs(currentPlayerStore);

  const currentPlayerWriter = (viewModel: CurrentPlayerViewModel) =>
    currentPlayerStore.write(viewModel);
  app.provide(CURRENT_PLAYER_WRITER, currentPlayerWriter);
  app.provide(CURRENT_PLAYER_READER, viewModel);
}

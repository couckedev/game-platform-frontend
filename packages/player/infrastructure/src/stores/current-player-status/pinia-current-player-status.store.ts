import type { CurrentPlayerViewModel } from '@player/interface-adapters/authenticate-player';
import { defineStore } from 'pinia';
import { readonly, ref } from 'vue';

export const useCurrentPlayerStore = defineStore(
  'current-player-status',
  () => {
    const viewModel = ref<CurrentPlayerViewModel>({
      status: 'LOADING',
      currentPlayer: null,
    });

    function write(newViewModel: CurrentPlayerViewModel) {
      viewModel.value = newViewModel;
    }

    return {
      viewModel: readonly(viewModel),
      write,
    };
  },
);

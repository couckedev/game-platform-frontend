import type { CurrentPlayerViewModel } from '@player/interface-adapters/projections/current-player';
import { defineStore } from 'pinia';
import { readonly, ref } from 'vue';

export const useCurrentPlayerStore = defineStore('current-player', () => {
  const viewModel = ref<CurrentPlayerViewModel>({
    currentPlayer: null,
  });

  function write(newViewModel: CurrentPlayerViewModel) {
    viewModel.value = newViewModel;
  }

  return {
    viewModel: readonly(viewModel),
    write,
  };
});

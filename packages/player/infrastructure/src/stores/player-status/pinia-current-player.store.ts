import type { AuthenticationStatusViewModel } from '@player/interface-adapters/projections/authentication-status';
import { defineStore } from 'pinia';
import { readonly, ref } from 'vue';

export const useAuthenticationStatusStore = defineStore(
  'authentication-status',
  () => {
    const viewModel = ref<AuthenticationStatusViewModel>({
      isLoading: true,
    });

    function write(newViewModel: AuthenticationStatusViewModel) {
      viewModel.value = newViewModel;
    }

    return {
      viewModel: readonly(viewModel),
      write,
    };
  },
);

import type { AuthenticationStatusViewModel } from '@player/interface-adapters/projections/authentication-status';
import { useStore } from '@shared/ui/stores/vuejs';
import { defineStore, storeToRefs } from 'pinia';
import { type App, computed, ref } from 'vue';
import { AUTHENTICATION_STATUS_READER } from './authentication-status-reader.token.js';
import { AUTHENTICATION_STATUS_WRITER } from './authentication-status-writer.token.js';

export function provideAuthenticationStatusStore(app: App) {
  const storeInstance = useStore();
  const authenticationStatusStore = defineStore('authentication-status', () => {
    const _viewModel = ref<AuthenticationStatusViewModel>({
      isLoading: true,
    });

    function write(viewModel: AuthenticationStatusViewModel) {
      _viewModel.value = viewModel;
    }

    return {
      viewModel: computed(() => _viewModel.value),
      write,
    };
  })(storeInstance);
  const { viewModel } = storeToRefs(authenticationStatusStore);

  const authenticationStatusWriter = (
    viewModel: AuthenticationStatusViewModel,
  ) => authenticationStatusStore.write(viewModel);
  app.provide(AUTHENTICATION_STATUS_WRITER, authenticationStatusWriter);
  app.provide(AUTHENTICATION_STATUS_READER, viewModel);
}

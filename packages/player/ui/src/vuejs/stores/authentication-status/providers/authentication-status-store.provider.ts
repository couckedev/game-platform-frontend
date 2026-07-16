import { useAuthenticationStatusStore } from '@player/infrastructure/stores';
import { useStore } from '@shared/ui/stores/vuejs';
import type { App } from 'vue';
import { AUTHENTICATION_STATUS_STORE } from './authentication-status-store.token.js';

export function provideAuthenticationStatusStore(app: App) {
  const storeInstance = useStore();
  const authenticationStatusStore = useAuthenticationStatusStore(storeInstance);
  app.provide(AUTHENTICATION_STATUS_STORE, authenticationStatusStore);
}

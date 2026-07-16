import type { App } from 'vue';
import {
  providePlayerApiHttpClient,
  providePlayerRepository,
} from '@/vuejs/http/index.js';
import {
  provideAuthenticationStatusStore,
  provideCurrentPlayerStore,
} from '@/vuejs/stores/index.js';
import type { PlayerModuleConfig } from './player-module-config.interface.js';

export function registerPlayerModule(app: App, config: PlayerModuleConfig) {
  providePlayerApiHttpClient(app, config);
  providePlayerRepository(app);
  provideAuthenticationStatusStore(app);
  provideCurrentPlayerStore(app);
}

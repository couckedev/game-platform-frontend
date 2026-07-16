import { useAuthenticatedHttpClient } from '@shared/ui/http/vuejs';
import type { App } from 'vue';
import type { PlayerModuleConfig } from '@/vuejs/composition/player-module-config.interface.js';
import { PLAYER_API_HTTP_CLIENT } from './player-api-http-client.token.js';

export function providePlayerApiHttpClient(
  app: App,
  config: PlayerModuleConfig,
) {
  const playerApiHttpClient = useAuthenticatedHttpClient({
    baseUrl: config.baseUrl,
  });
  app.provide(PLAYER_API_HTTP_CLIENT, playerApiHttpClient);
}

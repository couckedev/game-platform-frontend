import './styles.css';
import {
  createPlayerModule,
  PLAYER_MODULE,
} from '@player/infrastructure/vuejs';
import { createSharedModule, SHARED_MODULE } from '@shared/infrastructure';
import { createApp } from 'vue';
import { App, BootstrapError, getEnv } from './app/index.js';
import { createAppRouter } from './app/router/index.js';

try {
  const app = createApp(App);
  const sharedModule = await createSharedModule({
    keycloakConfig: {
      clientId: getEnv('VITE_KEYCLOAK_CLIENT_ID', true),
      realm: getEnv('VITE_KEYCLOAK_REALM', true),
      url: getEnv('VITE_KEYCLOAK_URL', true),
    },
  });
  const playerModule = createPlayerModule(sharedModule, {
    playerApiBaseUrl: getEnv('VITE_PLAYER_API_BASE_URL', true),
  });
  app.provide(SHARED_MODULE, sharedModule);
  app.provide(PLAYER_MODULE, playerModule);
  app.use(createAppRouter(playerModule));
  app.mount('#root');
} catch (error) {
  createApp(BootstrapError).mount('#root');
  throw error;
}

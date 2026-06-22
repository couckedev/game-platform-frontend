import { providePlayer } from '@player/ui/vue';
import { getEnvOrFail } from '@shared/ui';
import { provideSharedRuntime } from '@shared/ui/vue';
import type { App } from 'vue';

export async function bootstrapApp(app: App) {
  const sharedRuntime = provideSharedRuntime(app, {
    clientId: getEnvOrFail(import.meta.env, 'VITE_KEYCLOAK_CLIENT_ID'),
    realm: getEnvOrFail(import.meta.env, 'VITE_KEYCLOAK_REALM'),
    url: getEnvOrFail(import.meta.env, 'VITE_KEYCLOAK_URL'),
  });
  await sharedRuntime.authentication.init();
  const { features } = providePlayer(app, sharedRuntime, {
    playerApi: {
      baseUrl: getEnvOrFail(import.meta.env, 'VITE_PLAYER_API_BASE_URL'),
    },
  });
  await features.authenticatePlayer();
}

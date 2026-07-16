import { getEnv } from './get-env.js';

export const AppConfig = {
  keycloak: {
    clientId: getEnv<string>('VITE_KEYCLOAK_CLIENT_ID', true),
    realm: getEnv<string>('VITE_KEYCLOAK_REALM', true),
    url: getEnv<string>('VITE_KEYCLOAK_URL', true),
  },
  playerApiBaseUrl: getEnv<string>('VITE_PLAYER_API_BASE_URL', true),
} as const;

import type { AuthenticatedHttpClient } from '@shared/infrastructure/http';
import type { InjectionKey } from 'vue';

export const PLAYER_API_HTTP_CLIENT = Symbol(
  'PLAYER_API_HTTP_CLIENT',
) as InjectionKey<AuthenticatedHttpClient>;

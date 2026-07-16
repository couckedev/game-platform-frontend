import type { createHttpClient } from '@shared/infrastructure/http';
import type { InjectionKey } from 'vue';

export const HTTP_CLIENT_FACTORY = Symbol(
  'HTTP_CLIENT_FACTORY',
) as InjectionKey<typeof createHttpClient>;

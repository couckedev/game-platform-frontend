import type { HttpClientConfig } from '@shared/infrastructure/http';
import { inject } from 'vue';
import { HTTP_CLIENT_FACTORY } from '../providers/index.js';

export function useHttpClient(config: HttpClientConfig) {
  const httpClientFactory = inject(HTTP_CLIENT_FACTORY);
  if (httpClientFactory === undefined) {
    throw new Error('Http client factory has not been provided');
  }
  return httpClientFactory(config);
}

import {
  AuthenticatedHttpClient,
  type HttpClientConfig,
} from '@shared/infrastructure/http';
import { useAuthentication } from '../../../authentication/vuejs/index.js';
import { useHttpClient } from './use-http-client.composable.js';

export function useAuthenticatedHttpClient(config: HttpClientConfig) {
  const { accessTokenProvider } = useAuthentication();
  const httpClient = useHttpClient(config);
  return new AuthenticatedHttpClient(httpClient, accessTokenProvider);
}

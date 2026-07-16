import { createHttpClient } from '@shared/infrastructure/http';
import type { App } from 'vue';
import { HTTP_CLIENT_FACTORY } from './http-client-factory.token.js';

export function provideHttpClientFactory(app: App) {
  const factory = createHttpClient;
  app.provide(HTTP_CLIENT_FACTORY, factory);
}

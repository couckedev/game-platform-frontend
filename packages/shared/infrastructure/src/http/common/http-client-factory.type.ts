import type { HttpClient } from './http-client.interface';
import type { HttpClientConfig } from './http-client-config.interface';

export type HttpClientFactory = (config?: HttpClientConfig) => HttpClient;

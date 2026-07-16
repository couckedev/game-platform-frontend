import type { HttpClientRequestOptions } from './http-client-request-options.interface.js';

export interface HttpClient {
  get<Response>(
    url: string,
    options: HttpClientRequestOptions,
  ): Promise<Response>;
}

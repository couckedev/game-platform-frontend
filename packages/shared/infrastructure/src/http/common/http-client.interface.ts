import type { HttpClientRequestOptions } from './http-client-request-options.interface';

export interface HttpClient {
  get<Response>(
    url: string,
    options: HttpClientRequestOptions,
  ): Promise<Response>;
}

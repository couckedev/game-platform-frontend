import type { HttpClientOptions } from './http-client-options.interface.js';

export interface HttpClient {
  get<Response>(url: string, options: HttpClientOptions): Promise<Response>;
}

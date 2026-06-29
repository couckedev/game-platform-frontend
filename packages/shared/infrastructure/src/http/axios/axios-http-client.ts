import type { AxiosInstance } from 'axios';
import type { HttpClient } from '../common/http-client.interface.js';
import type { HttpClientOptions } from '../common/http-client-options.interface.js';

export class AxiosHttpClient implements HttpClient {
  constructor(private readonly axios: AxiosInstance) {}

  async get<Response>(
    url: string,
    options?: HttpClientOptions,
  ): Promise<Response> {
    const response = await this.axios.get<Response>(url, options);
    return response.data;
  }
}

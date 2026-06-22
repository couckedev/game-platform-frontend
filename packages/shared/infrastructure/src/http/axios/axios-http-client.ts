import { type AxiosInstance, isAxiosError } from 'axios';
import { HttpError } from '../common';
import type { HttpClient } from '../common/http-client.interface';
import type { HttpClientRequestOptions } from '../common/http-client-request-options.interface';

export class AxiosHttpClient implements HttpClient {
  constructor(private readonly axios: AxiosInstance) {}

  async get<Response>(
    url: string,
    options?: HttpClientRequestOptions,
  ): Promise<Response> {
    try {
      const response = await this.axios.get<Response>(url, options);
      return response.data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        throw new HttpError(error.response.status, url);
      }
      throw error;
    }
  }
}

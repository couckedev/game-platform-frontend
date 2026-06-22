import type { AccessTokenProvider } from '../../authentication/common';

import type { HttpClient } from '../common/http-client.interface';

export class AuthenticatedHttpClient implements HttpClient {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly accessTokenProvider: AccessTokenProvider,
  ) {}

  async get<Response>(url: string): Promise<Response> {
    const token = await this.accessTokenProvider.getAccessToken();
    return this.httpClient.get<Response>(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

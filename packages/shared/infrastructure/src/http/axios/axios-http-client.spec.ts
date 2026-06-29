import axios from 'axios';
import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import { AxiosHttpClient } from './axios-http-client.js';

describe('AxiosHttpClient', () => {
  const baseUrl = 'http://localhost';

  const server = setupServer();

  const axiosInstance = axios.create({
    baseURL: baseUrl,
  });

  const httpClient = new AxiosHttpClient(axiosInstance);

  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('should return deserialized response', async () => {
    server.use(
      http.get(`${baseUrl}/players/me`, () =>
        HttpResponse.json({
          playerId: 'playerId',
          nickname: 'nickname',
        }),
      ),
    );

    const response = await httpClient.get<{
      playerId: string;
      nickname: string;
    }>('/players/me');

    expect(response).toStrictEqual({
      playerId: 'playerId',
      nickname: 'nickname',
    });
  });
});

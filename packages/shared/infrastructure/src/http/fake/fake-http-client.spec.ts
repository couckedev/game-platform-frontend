import { describe, expect, it } from 'vitest';
import { HttpError } from '../common/index.js';
import { FakeHttpClient } from './fake-http-client.js';

describe('FakeHttpClient', () => {
  const url = '/test';

  it('should return registered response', async () => {
    const httpClient = new FakeHttpClient();
    const response = { foo: 'bar' };
    httpClient.registerGet(url, response);

    await expect(httpClient.get(url)).resolves.toStrictEqual(response);
  });

  it('should throw HttpError when registered', async () => {
    const httpClient = new FakeHttpClient();
    httpClient.registerGetError(url, new HttpError(404, url));

    await expect(httpClient.get(url)).rejects.toThrow(HttpError);
  });

  it('should throw error when no response registered', async () => {
    const httpClient = new FakeHttpClient();

    await expect(httpClient.get(url)).rejects.toThrow(
      `No fake response registered for GET ${url}`,
    );
  });

  it('should throw HttpError with correct status', async () => {
    const httpClient = new FakeHttpClient();
    httpClient.registerGetError(url, new HttpError(500, url));

    await expect(httpClient.get(url)).rejects.toSatisfy(
      (error) => error instanceof HttpError && error.status === 500,
    );
  });
});

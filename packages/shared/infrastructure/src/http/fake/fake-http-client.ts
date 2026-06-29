import type { HttpClient } from '../common/index.js';

export class FakeHttpClient implements HttpClient {
  private responses = new Map<string, unknown>();

  registerGet<Response>(url: string, response: Response): void {
    this.responses.set(`GET ${url}`, response);
  }

  async get<Response>(url: string): Promise<Response> {
    const response = this.responses.get(`GET ${url}`);

    if (!response) {
      throw new Error(`No fake response registered for GET ${url}`);
    }

    return response as Response;
  }
}

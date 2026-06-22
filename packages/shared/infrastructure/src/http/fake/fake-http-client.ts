import type { HttpClient, HttpError } from '../common';

export class FakeHttpClient implements HttpClient {
  private responses = new Map<string, unknown>();
  private errors = new Map<string, unknown>();

  registerGet<Response>(url: string, response: Response): void {
    this.responses.set(`GET ${url}`, response);
  }

  registerGetError(url: string, error: HttpError): void {
    this.errors.set(`GET ${url}`, error);
  }

  async get<Response>(url: string): Promise<Response> {
    const error = this.errors.get(`GET ${url}`);
    if (error) throw error;

    const response = this.responses.get(`GET ${url}`);
    if (!response)
      throw new Error(`No fake response registered for GET ${url}`);

    return response as Response;
  }
}

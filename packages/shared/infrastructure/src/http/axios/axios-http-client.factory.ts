import axios from 'axios';
import type { HttpClient, HttpClientConfig } from '../common/index.js';
import { AxiosHttpClient } from './axios-http-client.js';

export function createHttpClient(config: HttpClientConfig): HttpClient {
  const axiosInstance = axios.create({
    baseURL: config.baseUrl,
  });

  return new AxiosHttpClient(axiosInstance);
}

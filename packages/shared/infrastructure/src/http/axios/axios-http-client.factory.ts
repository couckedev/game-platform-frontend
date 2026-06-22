import axios from 'axios';
import type { HttpClient, HttpClientConfig } from '../common';

import { AxiosHttpClient } from './axios-http-client';

export function createHttpClient(config?: HttpClientConfig): HttpClient {
  const axiosInstance = axios.create({
    baseURL: config?.baseUrl,
  });

  return new AxiosHttpClient(axiosInstance);
}

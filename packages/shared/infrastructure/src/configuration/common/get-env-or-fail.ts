import { getEnv } from './get-env';

export function getEnvOrFail(env: Record<string, string>, key: string): string {
  const value = getEnv(env, key);
  if (typeof value !== 'string' || value.length === 0) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

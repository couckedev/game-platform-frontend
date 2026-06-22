export function getEnv(env: Record<string, string>, key: string): string {
  const value = env[key];
  return value;
}

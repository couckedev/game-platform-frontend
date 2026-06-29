export const getEnv = <TReturn>(
  key: string,
  failIfNotFound: boolean = false,
): TReturn => {
  const value = import.meta.env[key];
  if (failIfNotFound && value === undefined) {
    throw new Error(`Env var ${key} has not been set`);
  }
  return value;
};

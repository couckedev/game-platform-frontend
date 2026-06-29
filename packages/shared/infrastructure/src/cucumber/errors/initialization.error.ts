export class InitializationError extends Error {
  constructor(requested: string) {
    super(`${requested} must be initialized before using it`);
  }
}

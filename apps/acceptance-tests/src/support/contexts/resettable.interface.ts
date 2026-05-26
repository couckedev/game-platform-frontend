export interface Resettable {
  reset(): void | Promise<void>;
}

import type { SharedRuntime } from './composition';

export interface SharedTesting {
  runtime: SharedRuntime;
  setUserAsUnauthenticated: () => void;
  setUserAsAuthenticated: () => void;
}

import type { AuthenticatePlayerOutputData } from './index.js';

export interface AuthenticatePlayerOutputBoundary {
  present(outputData: AuthenticatePlayerOutputData): void;
}

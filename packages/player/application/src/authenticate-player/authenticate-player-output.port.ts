import type { AuthenticatePlayerOutputData } from './index.js';

export interface AuthenticatePlayerOutput {
  present(outputData: AuthenticatePlayerOutputData): void;
}

import type { LogoutPlayerOutputData } from './index.js';

export interface LogoutPlayerOutput {
  present(outputData: LogoutPlayerOutputData): void;
}

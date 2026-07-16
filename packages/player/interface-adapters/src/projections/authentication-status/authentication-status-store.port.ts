import type { AuthenticationStatusViewModel } from './authentication-status.view-model.js';

export interface AuthenticationStatusStore {
  readonly viewModel: AuthenticationStatusViewModel;
  write(viewModel: AuthenticationStatusViewModel): void;
}

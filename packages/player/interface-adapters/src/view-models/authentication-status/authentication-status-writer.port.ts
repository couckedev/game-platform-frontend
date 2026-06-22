import type { AuthenticationStatusViewModel } from './authentication-status-view-model.interface';

export type AuthenticationStatusWriter = (
  viewModel: AuthenticationStatusViewModel,
) => void;

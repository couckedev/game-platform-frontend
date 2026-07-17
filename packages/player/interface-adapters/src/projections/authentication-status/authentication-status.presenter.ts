import type { AuthenticatePlayerOutputData } from '@player/application/features/authenticate-player';
import type { AuthenticationStatusViewModel } from './authentication-status.view-model.js';
import { toAuthenticationStatusViewModel } from './authentication-status-view-model.mapper.js';

export class AuthenticationStatusPresenter {
  constructor(
    private readonly write: (viewModel: AuthenticationStatusViewModel) => void,
  ) {}

  present(outputData: AuthenticatePlayerOutputData): void {
    this.write(toAuthenticationStatusViewModel(outputData));
  }
}

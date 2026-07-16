import type {
  AuthenticationStatusStore,
  AuthenticationStatusViewModel,
} from '@player/interface-adapters/projections/authentication-status';

export class InMemoryAuthenticationStatusStore
  implements AuthenticationStatusStore
{
  private _viewModel: AuthenticationStatusViewModel = {
    isLoading: true,
  };

  get viewModel(): AuthenticationStatusViewModel {
    return this._viewModel;
  }

  write(viewModel: AuthenticationStatusViewModel): void {
    this._viewModel = viewModel;
  }
}

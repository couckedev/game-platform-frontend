import type { AuthenticatePlayerOutputData } from '@player/interface-adapters/features/authenticate-player';
import {
  AuthenticationStatusPresenter,
  type AuthenticationStatusViewModel,
} from '@player/interface-adapters/projections/authentication-status';

export function createAuthenticationStatusPresenter() {
  const _defaultValue: AuthenticationStatusViewModel = { isLoading: true };
  let _viewModel: AuthenticationStatusViewModel = _defaultValue;

  return {
    get viewModel() {
      return _viewModel;
    },
    present(outputData: AuthenticatePlayerOutputData) {
      _viewModel = toAuthenticationStatus(outputData);
    },
    reset() {
      _viewModel = _defaultValue;
    },
  };
}

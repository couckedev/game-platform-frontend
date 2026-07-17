// interface-adapters/features/authenticate-player/authenticate-player.output.ts
import type {
  AuthenticatePlayerOutputBoundary,
  AuthenticatePlayerOutputData,
} from '@player/application/features/authenticate-player';
import type {
  AuthenticationStatusPresenter,
  CurrentPlayerPresenter,
} from '../../projections/index.js';

export class AuthenticatePlayerOutput
  implements AuthenticatePlayerOutputBoundary
{
  constructor(
    private readonly currentPlayerPresenter: CurrentPlayerPresenter,
    private readonly authenticationStatusPresenter: AuthenticationStatusPresenter,
  ) {}

  present(outputData: AuthenticatePlayerOutputData): void {
    this.currentPlayerPresenter.present(outputData);
    this.authenticationStatusPresenter.present(outputData);
  }
}
